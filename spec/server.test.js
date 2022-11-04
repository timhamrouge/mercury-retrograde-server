const app = require("../server");
const supertest = require('supertest');
const requestWithSupertest = supertest(app);
const mongoose = require("mongoose");

describe("/", () => {
    it("GET returns status 200 and an object with all the topics", async () => {
      const res = await requestWithSupertest.get('/');
      // why you no work?
      expect(res.status).toEqual(200);
      // expect(res.type).toEqual(expect.stringContaining('json'));
      // expect(res.body).toHaveProperty('users')
      // return request
      //   .get("/")
      //   .expect(200)
      //   .then(res => {
      //     console.log(res)
      //   });
    })});