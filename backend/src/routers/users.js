const express = require("express");
const User = require("../models/users");
const router = new express.Router();
const auth = require("../middleware/auth");

// Create new user
router.post("/users", async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

// Login current user
router.post("/users/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(404).send(e);
	}
});

// Logout current user
router.post("/users/logout", auth, async (req, res) => {
	try {
		const user = req.user;
		user.tokens = user.tokens.filter((token) => token.token !== req.token);
		await user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
