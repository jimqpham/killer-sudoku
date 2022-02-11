const express = require("express");
const router = new express.Router();

const auth = require("../middleware/auth");
const authAdmin = require("../middleware/auth-admin");
const Board = require("../models/boards");
const skipDemoBoard = require("../middleware/skip-demo-board");

// fetch a board
router.get("/boards", auth, async (req, res) => {
	try {
		const board = await Board.findOne();
		res.send(board);
	} catch (e) {
		res.status(404).send();
	}
});

// add a board
router.post("/boards", [authAdmin, skipDemoBoard], async (req, res) => {
	try {
		const board = new Board(req.body);
		await board.save();
		res.status(201).send(board);
	} catch (e) {
		res.status(400).send();
	}
});

module.exports = router;
