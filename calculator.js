'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.number = 0;
  }

  initNumber(num) {
    this.number = num;
    return this;
  }

  add(addNum) {
    this.number += addNum;
    return this;
  }

  substract(substractNum) {
    this.number -= substractNum;
    return this;
  }

  multiply(multiplyNum) {
    this.number *= multiplyNum;
    return this;
  }

  divide(divideNum) {
    this.number /= divideNum;
    return this;
  }

  square(squareNum) {
    this.number = Math.pow(this.number, squareNum)
    return this;
  }

  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }

  wideCircle() {
    if (this.number % 7 === 0) {
      this.number = (22 / 7) * this.number * this.number;
    } else {
      this.number = 3.14 * this.number * this.number;
    }

    return this;
  }

  circumference() {
    if (this.number % 7 === 0) {
      this.number = 2 * (22 / 7) * this.number;
    } else {
      this.number = 2 * 3.14 * this.number;
    }

    return this;
  }

  // return number
  equal() {
    return this.number;
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