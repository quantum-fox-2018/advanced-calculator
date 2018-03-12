'use strict'

class Calculator {
  //write your code here
  constructor (inputNum) {

    this.result = inputNum
  }

  add (num) {

    this.result = this.result + num
    return this
  }

  substract (num) {

    this.result = this.result - num
    return this
  }

  multiply (num) {

    this.result = this.result * num
    return this
  }

  divide (num) {

    this.result = this.result / num
    return this
  }

  square (num) {

    this.result = Math.pow(this.result, num)
    return this
  }

  squareRoot () {

    this.result = Math.sqrt(this.result)
    return this
  }

  reset () {

    this.result = 0
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

let cal = new Calculator(4);

// console.log(cal.add(3).substract(1).multiply(2).divide(7).square(5).squareRoot().result);
// console.log(cal.add(3).result)
console.log(cal.square(2).result)

module.exports = {
  Calculator
}
