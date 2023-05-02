const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");
const { complexNum, operation } = require("./complex-number.js");

describe("complexNumber", function() {
  it("Should give the imaginary part of the complex number", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.getImaginaryPart(), 2);
  });

  it("Should give the real part of the complex number", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.getRealPart(), 3);
  });

  it("Should give the complex number", function() {
    const cn = complexNum(3, 2);
    strictEqual(cn.getNumber(), "3 + 2i");
  });

  it("Should give the complex number", function() {
    const cn = complexNum(0, 2);
    strictEqual(cn.getNumber(), "+ 2i");
  });
});

describe("operation", function() {
  const cn1 = complexNum(2, 3);
  const cn2 = complexNum(3, 2);
  const op = operation(cn1, cn2);

  it("Should give the sum of two imaginary numbers", function() {
    deepStrictEqual(op.add(), {real: 5, imaginary: 5});
  });
});
