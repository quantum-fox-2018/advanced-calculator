'use strict'

class Calculator {
  constructor (value) {
    this._value = value;
  }
  add (number) {
    this._value += number;
    return this;
  }
  substract (number) {
    this._value -= number;
    return this;
  }
  multiply (number) {
    this._value *= number;
    return this;
  }
  divide (number) {
    this._value /= number;
    return this;
  }
  square (number) {
    this._value = Math.pow(this._value,number);
    return this;
  }
  squareRoot (number) {
    this._value = Math.sqrt(this._value);
    return this;
  }
  konstantaPi(){
    this._value = Math.PI * this._value * this._value;
    return this;
  }
  hasil(){
    return this._value;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}