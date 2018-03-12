'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num = num;
    this.pi = Math.PI;
  }

  add (num) {
    this.num += num;
    return this;
  }

  substract(num) {
    this.num -= num;
    return this;
  }

  multiply(num) {
    this.num *= num;
    return this;
  }

  divide(num) {
    this.num /= num;
    return this;
  }

  square() {
    this.num = Math.pow(this.num, 2);
    return this;
  }

  squareRoot() {
    this.num = Math.sqrt(this.num);
    return this;
  }

  print() {
    return this.num;
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
