"use strict";
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define(
    "Dog",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        alowNull: false
      },
      picture: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};
