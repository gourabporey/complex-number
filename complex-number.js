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

  const add = function(other) {
    const sumOfReal = real + other.getRealPart();
    const sumOfImaginary = imaginary + other.getImaginaryPart();

    return complexNumber(sumOfReal, sumOfImaginary);
  };

  const mul = function(other) {
    const r = real;
    const i = imaginary;
    const or = other.getRealPart();
    const oi = other.getImaginaryPart();

    const realPart = (r * or) - (i * oi);
    const imaginaryPart = (i * or) + (r * oi);

    return complexNumber(realPart, imaginaryPart);
  };

  return { getRealPart, getImaginaryPart, toString, add, mul };
};

exports.complexNumber = complexNumber;
