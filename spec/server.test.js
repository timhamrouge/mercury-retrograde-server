const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

// figure out how to supress the 'Jest did not exit one second after the test run has completed.' issue

afterAll(() => {
  app.clo
});

it("Gets the test endpoint", async () => {
  // Sends GET Request to /test endpoint
  const res = await request.get("/");

  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello Timbo");
});



xdescribe("/", () => {
  it("GET returns status 200 and and hello tim", async () => {
    const res = await requestWithSupertest.get('/')
    .expect(res.status).toEqual(200)
  })

  it("GET returns a boolean when ", async () => {

  })
});