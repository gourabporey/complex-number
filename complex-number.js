const complexNum = function(real, imaginary) {
  const realPart = real;
  const imaginaryPart = imaginary;

  const getImaginaryPart = function() {
    return imaginaryPart;
  };

  const getRealPart = function() {
    return realPart;
  };

  const getNumber = function() {
    const operator = imaginaryPart > 0 ? "+" : "-";
    const cn = `${realPart} ${operator} ${imaginaryPart}i`;
    return realPart !== 0 ? cn : `${operator} ${imaginaryPart}i`;
  };

  return {getRealPart, getImaginaryPart, getNumber};
};

const operation = function(firstCn, secondCn) {
  const add = function() {
    const sumOfRealPath = firstCn.getRealPart() + secondCn.getRealPart();
    const sumOfImaginaryPath = firstCn.getImaginaryPart() + secondCn.getImaginaryPart();
    const sum = complexNum(sumOfRealPath, sumOfImaginaryPath);

    return {real: sum.getRealPart(), imaginary: sum.getImaginaryPart()};
  };

  return {add};
};

exports.complexNum = complexNum;
exports.operation = operation;
