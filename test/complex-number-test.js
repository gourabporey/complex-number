const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual, ...assert } = require("assert");

const { ComplexNumber } = require("../src/complex-number.js");
const { Real } = require("../src/real.js");
const { Imaginary } = require("../src/imaginary.js");

describe("complexNumber", function() {
  describe("getImaginaryPart()", function() {
    it("Should give the imaginary part of the complex number", function() {
      const a = new Real(3);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);

      const actual = c.getImaginaryPart();
      const expected = new Imaginary(new Real(2));
      assert.ok(actual.equals(expected));
    });
  });

  describe("getRealPart()", function() {
    it("Should give the real part of the complex number", function() {
      const a = new Real(3);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);

      const actual = c.getRealPart();
      const expected = new Real(3);
      assert.ok(actual.equals(expected));
    });
  });

  describe("toString()", function() {
    it("Should give the complex number in the form a + bi", function() {
      const a = new Real(3);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);
      strictEqual(c.toString(), "3+2i");
    });

    it("Should give the complex number in the form bi", function() {
      const a = new Real(0);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);
      strictEqual(c.toString(), "2i");
    });

    it("Should give the complex number in the form a", function() {
      const a = new Real(0);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);
      strictEqual(c.toString(), "2i");
    });

    it("Should give the complex number in the form a - bi", function() {
      const a = new Real(0);
      const b = new Imaginary(new Real(2));
      const c = new ComplexNumber(a, b);
      strictEqual(c.toString(), "2i");
    });
  });

  describe("add()", function() {
    it("Should give the sum of two complex number", function() {
      const [ a1, b1 ] = [ new Real(0), new Imaginary(new Real(2)) ];
      const [ a2, b2 ] = [ new Real(4), new Imaginary(new Real(4))];
      const [ er, ei ] = [ new Real(4), new Imaginary(new Real(6))];
      
      const [ c1, c2 ] = [ new ComplexNumber(a1, b1), new ComplexNumber(a2, b2)];

      const expected = new ComplexNumber(er, ei);
      const actual = c1.add(c2); 
      
      assert.ok(expected.equals(actual));
    });
  });

  describe("multiply()", function() {
    it("Should give the product of two complex number", function() {
      const [ a1, b1 ] = [ new Real(0), new Imaginary(new Real(2)) ];
      const [ a2, b2 ] = [ new Real(4), new Imaginary(new Real(4))];
      const [ er, ei ] = [ new Real(-8), new Imaginary(new Real(8))];
      
      const [ c1, c2 ] = [ new ComplexNumber(a1, b1), new ComplexNumber(a2, b2)];

      const expected = new ComplexNumber(er, ei);
      const actual = c1.multiply(c2); 
      
      assert.ok(expected.equals(actual));
    });
  });
});
