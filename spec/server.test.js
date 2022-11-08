const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

// figure out how to supress the 'Jest did not exit one second after the test run has completed.' issue


it("Gets the test endpoint", async () => {
  // Sends GET Request to /test endpoint
  const res = await request.get("/");

  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello Timbo");
});



describe("/is-mercury-retrograde", () => {
  describe("GET returns status 200 and a boolean when passed a date", () => {
    it("returns true when passed a date when mercury is in retrograde", async() => {
      const res = await request.get('/is-mercury-retrograde?date=2023-04-21')
      expect(res.status).toEqual(200)
      expect(res.body).toEqual({isRetrograde: true})
    });

    it("returns false when passed a date when mercury is not in retrograde", async() => {
      const res = await request.get('/is-mercury-retrograde?date=2023-02-01')
      expect(res.status).toEqual(200)
      expect(res.body).toEqual({isRetrograde: false})
    });

  })
});