const complexNum = function(real, imaginary) {
  const realPart = real;
  const imaginaryPart = imaginary;

  const getComplexNum = function() {
    return {real: realPart, imaginary: imaginaryPart};
  };

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const getRealPart = function() {
    return realPart;
  };

  const getNumber = function() {
    if(realPart === 0) {
      return `${imaginaryPart}i`;
    };

    const operator = imaginaryPart > 0 ? "+" : "-";
    return `${realPart} ${operator} ${imaginaryPart}i`;
  };

  return {getComplexNum, getRealPart, getImaginaryPart, getNumber};
};

const operation = function(firstCn, secondCn) {
  const a = firstCn.getComplexNum();
  const b = secondCn.getComplexNum();

  const add = function() {
    const sumOfRealPart = a.real + b.real;
    const sumOfImaginaryPart = a.imaginary + b.imaginary;
    const sum = complexNum(sumOfRealPart, sumOfImaginaryPart);

    return sum.getComplexNum();
  };

  const mul = function() {
    const realPartProduct = a.real * b.real - a.imaginary * b.imaginary;
    const imaginaryPartProduct = a.imaginary * b.real + a.real * b.imaginary;
    const product = complexNum(realPartProduct, imaginaryPartProduct);

    return product.getComplexNum(); 
  };

  return {add, mul};
};

exports.complexNum = complexNum;
exports.operation = operation;
