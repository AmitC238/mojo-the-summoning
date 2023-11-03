// create your User model here
const { DataTypes } = require("sequelize");
const { db } = require("../db/config"); // Adjust the path as needed

// Define the User model
const User = db.define("User", {
  username: DataTypes.STRING,
});

module.exports = { User };
