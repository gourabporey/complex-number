const complexNumber = function(real, imaginary) {
  const getImaginaryPart = function() {
    return imaginary;
  };

  const getRealPart = function() {
    return real;
  };

  const toString = function() {
    if(imaginary === 0) { 
      return `${real}`;
    };

    if(real === 0) {
      return `${imaginary}i`;
    };    

    const operator = imaginary > 0 ? "+" : "-";

    return `${real} ${operator} ${Math.abs(imaginary)}i`;
  };

  const add = function(augend) {
    const sumOfReal = real + augend.getRealPart();
    const sumOfImaginary = imaginary + augend.getImaginaryPart();

    return complexNumber(sumOfReal, sumOfImaginary);
  };

  const mul = function(multiplicand) {
    const r = real;
    const i = imaginary;
    const mr = multiplicand.getRealPart();
    const mi = multiplicand.getImaginaryPart();

    const realPart = (r * mr) - (i * mi);
    const imaginaryPart = (i * mr) + (r * mi);

    return complexNumber(realPart, imaginaryPart);
  };

  return { getRealPart, getImaginaryPart, toString, add, mul };
};

exports.complexNumber = complexNumber;
