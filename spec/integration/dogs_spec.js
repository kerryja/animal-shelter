const request = require("request");
const server = require("../../src/server");
const config = require("../../src/config/config");
const base = global.gConfig.baseAPIURL;

describe("routes : dogs", () => {
  beforeEach(done => {
    this.id;
    done();
  });

  describe("GET /dogs", function() {
    it("should return all of the dogs", function(done) {
      request.get(base + "/dogs", (err, res, body) => {
        expect(res.statusCode).toBe(200);
        let dogs = JSON.parse(body);
        expect(dogs.length).toBeGreaterThan(0);
        done();
      });
    });
  });

  describe("GET /dog/:id", function() {
    it("should return the dog with the selected id", function(done) {
      request.get(base + "/dog/2", (err, res, body) => {
        expect(res.statusCode).toBe(200);
        let dog = JSON.parse(body);
        expect(dog.id).toBe(2);
        done();
      });
    });
  });
});
