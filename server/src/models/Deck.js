const { DataTypes } = require("sequelize");
const { db } = require("../db/config"); // Adjust the path as needed

// Define the Deck model
const Deck = db.define("Deck", {
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER,
});

module.exports = { Deck };
