class Real {
  #value;

  constructor(number=0) {
    this.#value = +number;
  };

  equals(other) {
    return this.#value === other.#value;
  };

  add(other) {
    return new Real(this.#value + other.#value);
  };

  subtract(other) {
    return new Real(this.#value - other.#value);
  };

  multiply(other) {
    return new Real(this.#value * other.#value);
  };

  toString() {
    return `${this.#value}`;
  };
};

exports.Real = Real;
