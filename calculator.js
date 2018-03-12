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

  add(num) {
    this.number += num;
    return this;
  }

  substract(num) {
    this.number -= num;
    return this;
  }

  multiply(num) {
    this.number *= num;
    return this;
  }

  divide(num) {
    this.number /= num;
    return this;
  }

  square(num) {
    this.number = Math.pow(this.number, num)
    return this;
  }

  squareRoot(num) {
    this.number = Math.sqrt(num);
    return this;
  }

  wideCircle(num) {
    if (num % 7 === 0) {
      this.number = (22 / 7) * num * num;
    } else {
      this.number = 3.14 * num * num;
    }
    return this;
  }

  circumference(num) {
    if (num % 7 === 0) {
      this.number = 2 * (22 / 7) * num;
    } else {
      this.number = 2 * 3.14 * num;
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