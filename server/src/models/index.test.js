const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User, Deck, Card, Attack } = require("./index");
const { db } = require("../db/config");

describe("Associations", () => {
  it("should associate User with Deck", async () => {
    const user = await User.create({ username: "gandalf" });
    // console.log(Object.keys(user));
    // const deck = await Deck.create({
    //   name: "deck",
    //   xp: 100,
    // });
    // console.log(deck);

    await user.createDeck({
      name: "deck",
      xp: 100,
    });

    const associatedDeck = await user.getDeck();
    expect(associatedDeck.name).toBe("gandalf");
  });
});
