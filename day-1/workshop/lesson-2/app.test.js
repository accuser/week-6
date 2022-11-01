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

    test("response body text is a greeting", async () => {
      const { text } = await request(app).get("/");

      expect(text).toBe("Hello, World!");
    });
  });
});
