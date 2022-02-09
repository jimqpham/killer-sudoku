const request = require("supertest");
const app = require("../src/app");
const Board = require("../src/models/boards");
const {
	userOneId,
	userTwoId,
	userOne,
	userTwo,
	boardOne,
	setupDatabase,
} = require("./fixtures/setup");
const [boardTwo, boardThree] = require("./fixtures/boards-for-tests");

beforeEach(setupDatabase);

test("Should create board for admin user", async () => {
	const response = await request(app)
		.post("/boards")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send(boardTwo)
		.expect(201);

	const board = await Board.findById(response.body._id);
	expect(board).not.toBeNull();
});

test("Should not create board for normal player", async () => {
	const response = await request(app)
		.post("/boards")
		.set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
		.send(boardTwo)
		.expect(401);

	const board = await Board.findById(response.body._id);
	expect(board).toBeNull();
});

test("Should not create duplicate board for normal player", async () => {
	const response = await request(app)
		.post("/boards")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send(boardThree)
		.expect(400);

	const board = await Board.findById(response.body._id);
	expect(board).toBeNull();
});

test("Should return boards for user", async () => {
	const response = await request(app)
		.get("/boards")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	expect(response.body.regions).not.toBeNull;
	expect(response.body.solution).not.toBeNull;
});
