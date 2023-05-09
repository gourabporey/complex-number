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

  toString() {
    if(this.#imaginary === 0) { 
      return `${this.#real}`;
    };

    if(this.#real === 0) {
      return `${this.#imaginary}i`;
    };    

    const operator = this.#imaginary > 0 ? "+" : "-";

    return `${this.#real} ${operator} ${Math.abs(this.#imaginary)}i`;
  };

  add(other) {
    const real = this.#real + other.#real;
    const imaginary = this.#imaginary + other.#imaginary;

    return new ComplexNumber(real, imaginary);
  };

  mul(other) {
    const r = this.#real;
    const i = this.#imaginary;
    const or = other.#real;
    const oi = other.#imaginary;

    const real = (r * or) - (i * oi);
    const imaginary = (i * or) + (r * oi);

    return new ComplexNumber(real, imaginary);
  };
};

exports.ComplexNumber = ComplexNumber;
