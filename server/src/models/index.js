// import the rest of your models above
const { User } = require("./User");
const { Deck } = require("./Deck");
const { Card } = require("./Card");
const { Attack } = require("./Attack");

//set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, { through: "Card-Attack" });
Attack.belongsToMany(Card, { through: "Card-Attack" });

// and then export them all below
module.exports = { User, Deck, Card, Attack };
