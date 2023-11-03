const { DataTypes } = require("sequelize");
const { db } = require("../db/config"); // Adjust the path as needed

// Define the Attack model
const Attack = db.define("Attack", {
  title: DataTypes.STRING,
  mojoCost: DataTypes.INTEGER,
  staminaCost: DataTypes.INTEGER,
});

module.exports = { Attack };
