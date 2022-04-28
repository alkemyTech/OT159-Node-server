const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

/*
 * Test the /POST route
 */
describe("POST /auth/register", () => {
  test("should register a new user", async () => {
    const register = {
      firstName: "registerName",
      lastName: "registerLastName",
      email: "register@gmail.com",
      photo: "register.jpg",
      roleId: 2,
      password: "RegisterPass1",
    };

    const response = await api.post("/auth/register").send(register);

    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(response.body).toHaveProperty("newUser");
    expect(response.body.newUser.firstName).toEqual("registerName");
    expect(response.body.newUser.email).toEqual("register@gmail.com");
    expect(response.body).toHaveProperty("userToken");
  });

  test("should not register user if email is already in use", async () => {
    const existingUser = {
      firstName: "registerName",
      lastName: "registerLastName",
      email: "register@gmail.com",
      photo: "register.jpg",
      roleId: 2,
      password: "RegisterPass1",
    };

    const response = await api.post("/auth/register").send(existingUser);

    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("application/json")
    );
    expect(response.body).toEqual("The provided email is already in use");
  });

  test("should not register user if values are missing", async () => {
    const missingValues = {
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
      roleId: "",
      password: "",
    };

    const response = await api.post("/auth/register").send(missingValues);

    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("application/json")
    );
    expect(response.body).toHaveProperty("errorList");
    expect(response.body.errorList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: "this field cannot be empty!" }),
      ])
    );
  });
});

describe("POST /auth/login", () => {
  test("should login an existing user", async () => {
    const user = {
      firstName: "userName",
      lastName: "userLastName",
      email: "user@gmail.com",
      photo: "user.jpg",
      roleId: 2,
      password: "userPass1",
    };

    const login = {
      email: "user@gmail.com",
      password: "userPass1",
    };
    await api.post("/auth/register").send(user);

    const response = await api.post("/auth/login").send(login);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(response.body).toHaveProperty("user");
    expect(response.body.user.email).toEqual("user@gmail.com");
    expect(response.body).toHaveProperty("userToken");
  });

  test("should not login with wrong information", async () => {
    const wrongLogin = {
      email: "newUser@gmail.com",
      password: "wrongPass1",
    };

    const response = await api.post("/auth/login").send(wrongLogin);

    expect(response.status).toBe(404);
    expect(response.body.err).toEqual("{email or/and password are incorrect}");
  });

  test("should not login with missing information", async () => {
    const missingData = {
      email: "",
      password: "",
    };

    const response = await api.post("/auth/login").send(missingData);

    expect(response.status).toBe(422);
    expect(response.body.errorList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ msg: "this field cannot be empty!" }),
      ])
    );
  });
});
