const { repair } = require("./enhancer.js");
const { succeed } = require("./enhancer.js");
const { fail } = require("./enhancer.js");
// test away!
let item = {
  name: "Tom",
  durability: 50,
  enhancement: 15,
};

describe("enhancer", () => {
  describe("repair", () => {
    it("durability should return 100", () => {
      const result = repair(item);
      expect(result.durability).toBe(100);
    });
  });
});

describe("enhancer", () => {
  describe("succeed", () => {
    it("enhancement should increase 1 if smaller than 20", () => {
      const result = succeed(item);
      expect(result.enhancement).toBe(16);
    });
    it("enhancement changes nothing if equals 20", () => {
      let newItem = {
        name: "Tom",
        durability: 50,
        enhancement: 20,
      };
      const result = succeed(newItem);
      expect(result.enhancement).toBe(20);
    });
  });
});

describe("enhancer", () => {
  describe("fail", () => {
    it("enhancement is less than 15, durability decreased by 5.", () => {
      let lessEnhance = {
        name: "Tom",
        durability: 50,
        enhancement: 14,
      };
      const result = fail(lessEnhance);
      expect(result.durability).toBe(45);
    });
    it("enhancement is 15, the durability decreased by 10.", () => {
      const result = fail(item);
      expect(result.durability).toBe(40);
    });
    it("enhancement is greater than 16, durability - 10, enhancement - 1", () => {
      let greaterEnhance = {
        name: "Tom",
        durability: 50,
        enhancement: 18,
      };
      const result = fail(greaterEnhance);
      expect(result.durability).toBe(40);
      expect(result.enhancement).toBe(17);
    });
  });
});
