const app = require("../server");
const supertest = require('supertest');
const requestWithSupertest = supertest(app);
const mongoose = require("mongoose");

afterEach(() => {
  mongoose.disconnect();
});

describe("/", () => {
  it("GET returns status 200 and and hello tim", async () => {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toEqual(200);
  })

  it("GET returns a boolean when ", async () => {

  })
});