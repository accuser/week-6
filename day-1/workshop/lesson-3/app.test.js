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

    test("response has an <h1> tag that contains a greeting", async () => {
      const { text } = await request(app).get("/");

      expect(text).toMatch("<h1>Hello, World!</h1>");
    });
  });
});

describe("GET /about", () => {
  test("succeeds", async () => {
    const { statusCode } = await request(app).get("/about");

    expect(statusCode).toBe(200);
  });

  test("response body is text/html", async () => {
    const { headers } = await request(app).get("/about");

    expect(headers["content-type"]).toMatch("text/html");
  });

  test("response has an <h1> tag that contains a page title", async () => {
    const { text } = await request(app).get("/about");

    expect(text).toMatch("<h1>About</h1>");
  });
});
