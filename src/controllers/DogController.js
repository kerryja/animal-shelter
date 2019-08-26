const dogQueries = require("../db/queries.dogs");

module.exports = {
  index(req, res, next) {
    dogQueries.getAllDogs((err, dogs) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(
          dogs.map(dbDog => {
            return {
              name: dbDog.name,
              id: dbDog.id,
              breed: dbDog.breed,
              gender: dbDog.gender,
              age: dbDog.age,
              picture: dbDog.picture,
              updatedAt: dbDog.updatedAt
            };
          })
        );
      }
    });
  },
  getOneDog(req, res, next) {
    const id = req.params.id;
    dogQueries.getOneDog(id, (err, dbDog) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json({
          id: dbDog.id,
          name: dbDog.name,
          breed: dbDog.breed,
          gender: dbDog.gender,
          age: dbDog.age,
          description: dbDog.description,
          picture: dbDog.picture
        });
      }
    });
  }
};
