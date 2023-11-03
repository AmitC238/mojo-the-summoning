const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./Card");
const { db } = require("../db/config");

// define in global scope
let card;

// clear db and create new name before tests
beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({ name: "Power" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Card", () => {
  it("has an id", async () => {
    expect(card).toHaveProperty("id");
  });

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
});
