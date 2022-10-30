const app = require("../app");
const { expect } = require("chai");
// const request = require("supertest")(app);
const mongoose = require("mongoose");

describe("/", () => {

  after(() => mongoose.disconnect());
  describe("/", () => {
    it("GET returns status 200 and an object with all the topics", () => {
      return request
        .get("/")
        .expect(200)
        .then(res => {
          console.log(res)
        });
    })});
  });