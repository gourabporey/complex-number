const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");
const { ComplexNumber } = require("./complex-number.js");

describe("complexNumber", function() {
  describe("getImaginaryPart()", function() {
    it("Should give the imaginary part of the complex number", function() {
      const cn = new ComplexNumber(3, 2);
      strictEqual(cn.getImaginaryPart(), 2);
    });
  });

  describe("getRealPart()", function() {
    it("Should give the real part of the complex number", function() {
      const cn = new ComplexNumber(3, 2);
      strictEqual(cn.getRealPart(), 3);
    });
  });

  describe("Stringify()", function() {
    it("Should give the complex number in the form a + bi", function() {
      const cn = new ComplexNumber(3, 2);
      strictEqual(cn.toString(), "3 + 2i");
    });

    it("Should give the complex number in the form bi", function() {
      const cn = new ComplexNumber(0, 2);
      strictEqual(cn.toString(), "2i");
    });

    it("Should give the complex number in the form a", function() {
      const cn = new ComplexNumber(3, 0);
      strictEqual(cn.toString(), "3");
    });

    it("Should give the complex number in the form a - bi", function() {
      const cn = new ComplexNumber(3, -2);
      strictEqual(cn.toString(), "3 - 2i");
    });
  });

  describe("add()", function() {
    it("Should give the sum of two complex number", function() {
      const a = new ComplexNumber(2, 3);
      const b = new ComplexNumber(3, 2);

      const expected = new ComplexNumber(5, 5);
      const actual = a.add(b); 

      deepStrictEqual(actual.getRealPart(), expected.getRealPart());
      deepStrictEqual(actual.getImaginaryPart(), expected.getImaginaryPart());
    });
  });

  describe("mul()", function() {
    it("Should give the product of two complex number", function() {
      const a = new ComplexNumber(2, 3);
      const b = new ComplexNumber(3, 2);

      const actual = a.mul(b); 
      const expected = new ComplexNumber(0, 13);

      deepStrictEqual(actual.getRealPart(), expected.getRealPart());
      deepStrictEqual(actual.getImaginaryPart(), expected.getImaginaryPart());
    });
  });
});
