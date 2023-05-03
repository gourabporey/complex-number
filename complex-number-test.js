const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");
const { complexNum } = require("./complex-number.js");

describe("complexNumber", function() {
  it("Should give the imaginary part of the complex number", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.getImaginaryPart(), 2);
  });

  it("Should give the real part of the complex number", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.getRealPart(), 3);
  });

  it("Should give the complex number in the form a + bi", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.stringify(), "3 + 2i");
  });

  it("Should give the complex number in the form bi", function() {
    const cn = complexNum(0, 2);
    strictEqual(cn.stringify(), "2i");
  });

  it("Should give the complex number in the form a", function() {
    const cn = complexNum(3, 0);
    strictEqual(cn.stringify(), "3");
  });

  it("Should give the complex number in the form a - bi", function() {
    const cn = complexNum(3, -2);
    strictEqual(cn.stringify(), "3 - 2i");
  });

  describe("add()", function() {
    it("Should give the sum of two complex number", function() {
      const a = complexNum(2, 3);
      const b = complexNum(3, 2);

      const actual = a.add(b).getComplexNum(); 
      const expected = {real: 5, imaginary: 5};

      deepStrictEqual(actual, expected);
    });
  });
});
