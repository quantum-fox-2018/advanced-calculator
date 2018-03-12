'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num;
  }
  add (num) {
    this.number += num;
    return this;
  }
  substract (num) {
    this.number -= num;
    return this;
  }
  multiply (num) {
    this.number *= num;
    return this;
  }
  divide (num) {
    this.number /= num;
    return this;
  }
  square (num) {
    this.number = Math.pow(this.number, num);
    return this;
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
  }
}

var num = 10;
var calculator = new Calculator(num);


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
