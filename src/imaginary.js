const { Real } = require("./real.js");

class Imaginary {
  #value;

  constructor(number) {
    this.#value = number;
  };

  equals(other) {
    return this.#value.equals(other.#value);
  };

  add(other) {
    return new Imaginary(this.#value.add(other.#value));
  };

  subtract(other) {
    return new Imaginary(this.#value.subtract(other.#value));
  };

  multiply(multiplier) {
    return this.#value.multiply(multiplier.#value).multiply(new Real(-1));
  };

  multiplyReal(multiplier) {
    return new Imaginary(this.#value.multiply(multiplier));
  };

  toString() {
    return `${this.#value}i`;
  };
};

exports.Imaginary = Imaginary;
