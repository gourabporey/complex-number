const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual, ...assert } = require("assert");
const { Real } = require("../src/real.js");

describe("Real Number", function() {
  describe("multiply", function() {
    it("Should give another real number whose value is the sum of two non-zero real numbers", function() {
      const a = new Real(4);
      const b = new Real(5);
      const actual = a.multiply(b);
      const expected = new Real(20);
      assert.ok(actual.equals(expected));
    });
  });

  describe("add", function() {
    it("Should give another real number whose value is the sum of two non-zero real numbers", function() {
      const a = new Real(4);
      const b = new Real(5);
      const actual = a.add(b);
      const expected = new Real(9);
      assert.ok(actual.equals(expected));
    });
  });

  describe("Subtract()", function() {
    it("Should give another real number whose value is the difference of two non-zero real numbers", function() {
      const a = new Real(40);
      const b = new Real(5);
      const actual = a.subtract(b);
      const expected = new Real(35);
      assert.ok(actual.equals(expected));
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

  describe("equals()", function() {
    it("Should be equal for two real numbers with no contructor", function() {
      const r1 = new Real();
      const r2 = new Real()
      strictEqual(r1.equals(r2), true);
    });

    it("Should be equal for two real numbers with same value", function() {
      const r1 = new Real(5);
      const r2 = new Real(5);
      strictEqual(r1.equals(r2), true);
    });

    it("Should not be equal for two real numbers with different values", function() {
      const r1 = new Real(5);
      const r2 = new Real(7);
      strictEqual(r1.equals(r2), false);
    });

    it("Should be equal for two real numbers with same values and different types", function() {
      const r1 = new Real(5);
      const r2 = new Real("5");
      strictEqual(r1.equals(r2), true);
    });
  });
});
