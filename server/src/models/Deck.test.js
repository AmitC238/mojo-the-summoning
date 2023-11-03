const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./Deck");
const { db } = require("../db/config");

// define in global scope
let deck;

// clear db and create new name before tests
beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "gandalf" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Deck", () => {
  it("has an id", async () => {
    expect(deck).toHaveProperty("id");
  });
});
