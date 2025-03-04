const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require("./User");
const { db } = require("../db/config");

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  user = await User.create({ name: "Amit" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("User", () => {
  it("has an id", async () => {
    expect(user).toHaveProperty("id");
  });

  // it("should associate User with Deck", async () => {
  //   const user = await User.create({ username: "gandalf" });
  //   const deck = await user.createDeck({
  //     name: "deck",
  //     xp: 100,
  //   });

  //   await user.addDeck(deck.id);

  //   const associatedDeck = await user.getDeck();
  //   expect(associatedDeck.name).toBe("The Fellowship");
  // });
});
