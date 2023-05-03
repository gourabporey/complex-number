const complexNum = function(real, imaginary) {
  const getComplexNum = function() {
    return {real, imaginary};
  };

  const getImaginaryPart = function() {
    return imaginary;
  };

  const getRealPart = function() {
    return real;
  };

  const stringify = function() {
    if(imaginary === 0) return `${real}`;
    if(real === 0) return `${imaginary}i`;
    const operator = imaginary > 0 ? "+" : "-";

    return `${real} ${operator} ${Math.abs(imaginary)}i`;
  };

  const add = function(augend) {
    const b = augend.getComplexNum();

    const sumOfReal = real + b.real;
    const sumOfImaginary = imaginary + b.imaginary;
    const sum = complexNum(sumOfReal, sumOfImaginary);

    return sum;
  };

  const mul = function(multiplicand) {
    const b = multiplicand.getComplexNum();

    const realPart = real * b.real - imaginary * b.imaginary;
    const imaginaryPart = imaginary * b.real + real * b.imaginary;
    const product = complexNum(realPart, imaginaryPart);

    return product; 
  };

  return {getComplexNum, getRealPart, getImaginaryPart, stringify, add, mul};
};

exports.complexNum = complexNum;
