'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
    return this
  }
  add (number) {
    this.number = this.number + number
    return this
  }
  substract (number) {
    this.number = this.number - number
    return this
  }
  multiply (number) {
    this.number = this.number * number
    return this
  }
  divide (number) {
    this.number = this.number / number
    return this
  }
  square (number) {
    this.number = Math.pow(this.number, number)
    return this
  }
  squareRoot () {
    this.number = Math.pow(this.number, 0.5)
    return this
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

var calc = new Calculator(16)
calc.squareRoot()
console.log(calc.number);
calc.squareRoot().square(5).add(10)
console.log(calc.number);
