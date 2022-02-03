const User = require("../models/users");
const jwt = require("jsonwebtoken");

const authAdmin = async (req, res, next) => {
	try {
		const token = req.header("authorization").replace("Bearer ", "");
		const decodedId = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findOne({
			_id: decodedId._id,
			"tokens.token": token,
			role: "admin",
		});

		if (!user) {
			throw new Error("User not found");
		}

		req.user = user;
		req.token = token;

		next();
	} catch (e) {
		res.status(401).send({ e, message: "Please authenticate as admin." });
	}
};

module.exports = authAdmin;
