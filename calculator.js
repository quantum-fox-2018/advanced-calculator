'use strict'

class Calculator {
  //write your code here
  constructor (param_num) {
    this.num = param_num;
  }

  add (num2) {
    this.num = this.num + num2;
    return this;
  }

  substract (num2) {
    this.num = this.num - num2;
    return this;
  }

  multiply (num2) {
    this.num = this.num * num2;
    return this;
  }

  divide (num2) {
    this.num = this.num / num2;
    return this;
  }

  square (num2) {
    //this.num = Math.pow(this.num, num2);
    for (let i = 1; i < num2; i++) {
      this.num = this.num * this.num;
    }
    return this;
  }

  squareRoot () {
    //this.num = Math.sqrt(this.num);
    for (let i = 1; i < this.num; i++) {
      for (let j = 1; j < this.num; j++) {
        if (i === j && i*j === this.num) {
          this.num = i;
        }
      }
    }
    return this;
  }

  circleWide () {
    const pi = 3.14;
    this.num = pi * this.square(2).printResult();
    return this;
  }

  circleCircumference () {
    const pi = 3.14;
    this.num = 2 * pi * this.num;
    return this;
  }

  printResult() {
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
