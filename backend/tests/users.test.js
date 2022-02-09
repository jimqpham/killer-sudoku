const request = require("supertest");
const app = require("../src/app");

const { userOneId, userOne, setupDatabase } = require("./fixtures/setup");
const User = require("../src/models/users");

beforeEach(setupDatabase);

test("Should signup a new user", async () => {
	const response = await request(app)
		.post("/users")
		.send({
			email: "jim@gmail.com",
			password: "MyPass777!",
		})
		.expect(201);

	// Assert that the database was changed correctly
	const user = await User.findById(response.body.user._id);
	expect(user).not.toBeNull();

	// Assertions about the response
	expect(response.body).toMatchObject({
		user: {
			email: "jim@gmail.com",
		},
		token: user.tokens[0].token,
	});

	expect(user.password).not.toBe("MyPass777!");
});

test("Should return user information for authenticated user", async () => {
	const response = await request(app)
		.get("/users")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	expect(response.body.role).not.toBeNull;
	expect(response.body.currentInput).not.toBeNull;
});

test("Should not return user information for unauthenticated user", async () => {
	const response = await request(app).get("/users").send().expect(401);

	expect(response.body.role).toBeNull;
	expect(response.body.currentInput).toBeNull;
});

test("Should login existing user", async () => {
	const response = await request(app)
		.post("/users/login")
		.send({
			email: userOne.email,
			password: userOne.password,
		})
		.expect(200);

	const user = await User.findById(userOneId);
	expect(response.body).toMatchObject({
		token: user.tokens[1].token,
	});
});

test("Should not login non-existing user", async () => {
	await request(app)
		.post("/users/login")
		.send({
			email: "non-existing@example.com",
			password: "ahyuhyuh",
		})
		.expect(404);
});
