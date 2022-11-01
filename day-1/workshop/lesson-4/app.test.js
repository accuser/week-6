const app = require("./app");
const request = require("supertest");

describe("app", () => {
  describe("GET /", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });

    test("response body is text/html", async () => {
      const { headers } = await request(app).get("/");

      expect(headers["content-type"]).toMatch("text/html");
    });

    test("response contains a greeting", async () => {
      const { text } = await request(app).get("/");

      expect(text).toBe("Hello, World!");
    });
  });

  describe("POST /:name", () => {
    test("redirects", async () => {
      const { statusCode, headers } = await request(app).post("/Morty");

      expect(statusCode).toBe(302);
      expect(headers["location"]).toBe("/");
    });

    test("updates the server's state", async () => {
      await request(app).post("/Morty");

      const { text } = await request(app).get("/");

      expect(text).toBe("Hello, Morty!");
    });
  });
});
