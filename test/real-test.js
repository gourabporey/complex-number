const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { Real } = require("../src/real.js");

describe("Real Number", function() {
  describe("add", function() {
    it("Should give another real number whose value is the sum of two non-zero real numbers", function() {
      const a = new Real(4);
      const b = new Real(5);
      const actual = a.add(b).value();
      const expected = new Real(9).value();
      strictEqual(actual, expected);
    });
  });

  describe("toString()", function() {
    it("Should give me any +ve number in a stringified form", function() {
      const r1 = new Real(5);
      strictEqual(r1.toString(), '5');
    });

    it("Should give me any -ve number in a stringified form", function() {
      const r1 = new Real(-5);
      strictEqual(r1.toString(), '-5');
    });
  });

  describe("value()", function() {
    it("Should give 0 if I don't provide any value during making the real number", function() {
      const r1 = new Real();
      strictEqual(r1.value(), 0);
    });

    it("Should give the value of the real number", function() {
      const r1 = new Real(5);
      strictEqual(r1.value(), 5);
    });

    it("Should give value of the real number when the number is in text form", function() {
      const r1 = new Real("5");
      strictEqual(r1.value(), 5);
    });

    it("Should give NaN for any thing other than type number", function() {
      const r1 = new Real("a");
      strictEqual(r1.value(), NaN);
    });
  });
});
