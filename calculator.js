'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.firstNum = 0;
  }
  add (num) {
    if (!num) {
      this.firstNum += this.firstNum;
      return this;
    } else {
      this.firstNum += Number(num);
      return this;
    }
  }

  substract (num) {
    if (!num) {
      this.firstNum -= this.firstNum;
      return this;
    } else {
      this.firstNum -= Number(num);
      return this;
    }
  }

  multiply (num) {
    if (!num) {
      this.firstNum *= this.firstNum;
      return this;
    } else {
      this.firstNum *= Number(num);
      return this;
    }
  }

  divide (num) {
    if (!num) {
      this.firstNum /= this.firstNum;
      return this;
    } else {
      this.firstNum /= Number(num);
      return this;
    }
  }

  square (num) {
    if (!num) {
      this.firstNum = Math.pow(this.firstNum,this.firstNum);
      return this;
    } else {
      this.firstNum = Math.pow(this.firstNum,Number(num));
      return this;
    }
  }

  squareRoot () {
    this.firstNum = Math.sqrt(this.firstNum);
    return this;
  }

  phi() {
    return Math.PI;
  }

  result() {
    return this.firstNum;
  }

}

var calc = new Calculator();
console.log(calc.add(2).add().substract(1).multiply(2).divide(3).square(2).squareRoot().result());

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
