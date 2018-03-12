'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num1 = num;
    this.pi = 3.14;
  }
  add (addNum) {
    let num2 = addNum;
    this.num1 += num2;
    return this;
  }
  substract (subNum) {
    let num2 = subNum;
    this.num1 -= num2;
    return this;
  }
  multiply (multNum) {
    let num2 = multNum;
    this.num1 *= num2;
    return this;
  }
  divide (divNum) {
    let num2 = divNum;
    this.num1 /= num2;
    return this;
  }
  square (powNum) {
    let num2 = powNum;
    this.num1 = Math.pow(this.num1,num2);
    return this;
  }
  squareRoot (sqrNum) {
    let num2 = sqrNum;
    this.num1 = Math.sqrt(this.num1, 1/num2);
    return this;
  }
  circleLength () {
    this.num1 *= this.pi;
    return this;
  }
  circleArea () {
    this.num1 = ((this.num1 / 2) * this.pi).toFixed(2);
    return this;
  }
  result () {
    return this.num1;
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
