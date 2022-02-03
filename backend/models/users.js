const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid email!");
			}
		},
	},
	password: {
		type: String,
		required: true,
		minLength: 4,
		trim: true,
	},
	role: {
		type: String,
		default: "player",
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
	currentInput: {
		type: [[String]],
		default: Array(9)
			.fill("")
			.map((x) => Array(9).fill("")),
	},
});

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
};

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

	user.tokens.push({ token });
	await user.save();

	return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Email not found!");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Wrong password!");
	}

	return user;
};

userSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
