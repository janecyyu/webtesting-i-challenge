const { repair } = require("./enhancer.js");
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
