const { Real } = require("./real.js");
const { Imaginary } = require("./imaginary.js");

class ComplexNumber {
  #real;
  #imaginary;

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  };

  getImaginaryPart() {
    return this.#imaginary;
  };
  
  getRealPart() {
    return this.#real;
  };

  #isNegative(number) {
    return number.toString().includes("-");
  };

  equals(other) {
    return this.#real.equals(other.#real) && this.#imaginary.equals(other.#imaginary);
  }

  toString() {
    if(this.#imaginary.equals(new Imaginary(new Real(0)))) { 
      return `${this.#real.toString()}`;
    };

    if(this.#real.equals(new Real(0))) {
      return `${this.#imaginary.toString()}`;
    };    

    const operator = this.#isNegative(this.#imaginary) ? "" : "+";

    return `${this.#real.toString()}${operator}${this.#imaginary.toString()}`;
  };

  add(other) {
    const real = this.#real.add(other.#real);
    const imaginary = this.#imaginary.add(other.#imaginary);

    return new ComplexNumber(real, imaginary);
  };

  multiply(other) {
    const r = this.#real;
    const i = this.#imaginary;
    const or = other.#real;
    const oi = other.#imaginary;

    const real = r.multiply(or).add(i.multiply(oi));
    const imaginary = i.multiplyReal(or).add(oi.multiplyReal(r));

    return new ComplexNumber(real, imaginary);
  };
};

exports.ComplexNumber = ComplexNumber;