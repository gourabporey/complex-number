const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");
const { complexNumber } = require("./complex-number.js");

describe("complexNumber", function() {
  describe("getImaginaryPart()", function() {
    it("Should give the imaginary part of the complex number", function() {
      const cn = complexNumber(3, 2);
      strictEqual(cn.getImaginaryPart(), 2);
    });
  });

  describe("getRealPart()", function() {
    it("Should give the real part of the complex number", function() {
      const cn = complexNumber(3, 2);
      strictEqual(cn.getRealPart(), 3);
    });
  });

  describe("Stringify()", function() {
    it("Should give the complex number in the form a + bi", function() {
      const cn = complexNumber(3, 2);
      strictEqual(cn.toString(), "3 + 2i");
    });

    it("Should give the complex number in the form bi", function() {
      const cn = complexNumber(0, 2);
      strictEqual(cn.toString(), "2i");
    });

    it("Should give the complex number in the form a", function() {
      const cn = complexNumber(3, 0);
      strictEqual(cn.toString(), "3");
    });

    it("Should give the complex number in the form a - bi", function() {
      const cn = complexNumber(3, -2);
      strictEqual(cn.toString(), "3 - 2i");
    });
  });

  describe("add()", function() {
    it("Should give the sum of two complex number", function() {
      const a = complexNumber(2, 3);
      const b = complexNumber(3, 2);

      const actual = a.add(b).toString(); 
      const expected = "5 + 5i";

      deepStrictEqual(actual, expected);
    });
  });

  describe("mul()", function() {
    it("Should give the product of two complex number", function() {
      const a = complexNumber(2, 3);
      const b = complexNumber(3, 2);

      const actual = a.mul(b).toString(); 
      const expected = "13i";

      deepStrictEqual(actual, expected);
    });
  });
});
