'use strict'

class Calculator {
  constructor (number) {
    this.number = number;
    this.pi = Math.PI;
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
    this.number = Math.pow(this.number,num);
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this
  }
  areaOfCircle(){
    return Math.PI*this.number*this.number;
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
