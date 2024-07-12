import request from "supertest";
import app from "../../src/app";

describe("GET '/'", () => {
  test("should render the index page with the correct site title", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("<h1> Hello World </h1>");
  });
});
