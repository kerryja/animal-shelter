const Dog = require("./models").Dog;

module.exports = {
  getAllDogs(callback) {
    return Dog.findAll()

      .then(dogs => {
        callback(null, dogs);
      })
      .catch(err => {
        callback(err);
      });
  },
  getOneDog(id, callback) {
    return Dog.findByPk(id)
      .then(dog => {
        callback(null, dog);
      })
      .catch(err => {
        callback(err);
      });
  }
};
