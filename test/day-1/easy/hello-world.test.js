import app from "../../../day-1/easy/hello-world";

describe("app", () => {
  describe("GET /", () => {
    test("succeeds", async () => {
      const { statusCode } = await request(app).get("/");

      expect(statusCode).toBe(200);
    });
  });
});
