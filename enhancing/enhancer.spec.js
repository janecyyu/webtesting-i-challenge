const { repair } = require("./enhancer.js");
const { succeed } = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("durability should return 100", () => {
      let item = {
        name: "Tom",
        durability: 50,
        enhancement: 15,
      };
      const result = repair(item);
      expect(result.durability).toBe(100);
    });
  });
});
describe("enhancer", () => {
  describe("succeed", () => {
    it("enhancement should increase 1 if smaller than 20", () => {
      let item = {
        name: "Tom",
        durability: 50,
        enhancement: 15,
      };
      const result = succeed(item);
      expect(result.enhancement).toBe(16);
    });
    it("enhancement changes nothing if equals 20", () => {
      let item = {
        name: "Tom",
        durability: 50,
        enhancement: 20,
      };
      const result = succeed(item);
      expect(result.enhancement).toBe(20);
    });
  });
});
