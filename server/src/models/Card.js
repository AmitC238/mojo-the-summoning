const { DataTypes } = require("sequelize");
const { db } = require("../db/config"); // Adjust the path as needed

// Define the Card model
const Card = db.define("Card", {
  name: DataTypes.STRING,
  mojo: DataTypes.INTEGER,
  stamina: DataTypes.INTEGER,
  imgUrl: DataTypes.STRING,
});

module.exports = { Card };
