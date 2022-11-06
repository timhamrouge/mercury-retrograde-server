const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

// afterEach(() => {
//   mongoose.disconnect();
// });

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