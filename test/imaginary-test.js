const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual, ...assert } = require("assert");

const { Imaginary } = require("../src/imaginary.js");
const { Real } = require("../src/real.js");

describe("Imaginary Number", function() {
  describe("multiply real", function() {
    it("Should give imaginary number when multiplied with real number", function() {
      const a = new Imaginary(new Real(5));
      const b = new Real(6);
      const actual = a.multiplyReal(b);
      const expected = new Imaginary(new Real(30));

      assert.ok(actual.equals(expected));
    });
  });

  describe("multiply", function() {
    it("Should give real number whose value is the product of two non-zero imaginary numbers", function() {
      const a = new Imaginary(new Real(4));
      const b = new Imaginary(new Real(5));

      const actual = a.multiply(b);
      const expected = new Real(-20);

      assert.ok(actual.equals(expected));
    });
  });

  describe("add", function() {
    it("Should give another imaginary number whose value is the sum of two non-zero imaginary numbers", function() {
      const a = new Imaginary(new Real(4));
      const b = new Imaginary(new Real(5));

      const actual = a.add(b);
      const expected = new Imaginary(new Real(9));

      assert.ok(actual.equals(expected));
    });
  });

  describe("Subtract()", function() {
    it("Should give another imaginary number whose value is the difference of two non-zero imaginary numbers", function() {
      const a = new Imaginary(new Real(40));
      const b = new Imaginary(new Real(5));

      const actual = a.subtract(b);
      const expected = new Imaginary(new Real(35));
      assert.ok(actual.equals(expected));
    });
  });

  describe("toString()", function() {
    it("Should give me any +ve number in a stringified form", function() {
      const r1 = new Imaginary(new Real(5));
      strictEqual(r1.toString(), '5i');
    });

    it("Should give me any -ve number in a stringified form", function() {
      const r1 = new Imaginary(new Real(-5));
      strictEqual(r1.toString(), '-5i');
    });
  });

  describe("equals()", function() {
    it("Should be equal for two imaginary numbers with no contructor", function() {
      const r1 = new Imaginary(new Real());
      const r2 = new Imaginary(new Real())
      strictEqual(r1.equals(r2), true);
    });

    it("Should be equal for two imaginary numbers with same value", function() {
      const r1 = new Imaginary(new Real(5));
      const r2 = new Imaginary(new Real(5));
      strictEqual(r1.equals(r2), true);
    });

    it("Should not be equal for two imaginary numbers with different values", function() {
      const r1 = new Imaginary(new Real(5));
      const r2 = new Imaginary(new Real(7));
      strictEqual(r1.equals(r2), false);
    });

    it("Should be equal for two imaginary numbers with same values and different types", function() {
      const r1 = new Imaginary(new Real(5));
      const r2 = new Imaginary(new Real("5"));
      strictEqual(r1.equals(r2), true);
    });
  });
});
