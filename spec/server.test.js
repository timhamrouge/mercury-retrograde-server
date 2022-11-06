const request = require("supertest");

const app = require("../server");
// afterEach(() => {
//   mongoose.disconnect();
// });

describe("Test example", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      // More logic goes here
  });
  // More things come here
});


xdescribe("/", () => {
  it("GET returns status 200 and and hello tim", async () => {
    const res = await requestWithSupertest.get('/')
    .expect(res.status).toEqual(200)
  })

  it("GET returns a boolean when ", async () => {

  })
});