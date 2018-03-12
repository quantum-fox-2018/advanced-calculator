'use strict'

class Calculator {
  //write your code here
  constructor (inputAwal) {
    this.result = inputAwal;

  }
  add (input) {
    this.result = this.result + input;
    return this;
  }

  substract (input) {
    this.result = this.result - input;
    return this;
  }

  multiply (input) {
    this.result = this.result * input;
    return this;
  }

  divide (input) {
    this.result = this.result / input;
    return this;
  }

  square (input) {
    this.result = Math.pow(this.result, input);
    return this;
  }

  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
const pi        = Math.PI;
var calculate   = new Calculator(0);

console.log(calculate.add(4).substract(2).multiply(4).divide(2).square(2).squareRoot());
console.log(calculate.add(2).square(2).multiply(pi));

module.exports = {
  Calculator
}
