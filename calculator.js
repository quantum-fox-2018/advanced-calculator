'use strict'

class Calculator {
  //write your code here
  constructor (firstNum) {
    // this.firstNum = firstNum;
    this.result = firstNum;

    return this.result;
  }

  add (num) {
    this.result = this.result + num;

    return this;
  }

  substract (num) {
    this.result = this.result - num;

    return this;
  }

  multiply (num) {
    this.result = this.result * num;

    return this;
  }

  divide (num) {
    this.result = this.result / num;

    return this;
  }

  square (num) {
    this.result = Math.pow(this.result, 2);

    return this;
  }

  squareRoot () {
    this.result = Math.sqrt(this.result);
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

//Test case
let cal = new Calculator(5);

console.log(cal.add(3).substract(1).multiply(4).divide(2).square(3).squareRoot());
// console.log(cal.add(3).substract(1));



module.exports = {
  Calculator
}
