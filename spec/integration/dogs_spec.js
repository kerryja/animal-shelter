const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:4000/api/dogs";

describe("routes : /api/dogs", () => {
  describe("GET /api/dogs", () => {
    it("should return a status code of 200", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
