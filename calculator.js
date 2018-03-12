'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.num = 0
    this.pi = Math.PI
  }
  add (num2) {
    this.num = this.num + num2
    return this
  }
  substract (num2) {
    this.num = this.num - num2
    return this
  }
  multiply (num2) {
    this.num = this.num * num2
    return this
  }
  divide (num2) {
    this.num = this.num / num2
  }
  square (num2) {
    this.num = Math.pow(this.num, num2)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  equal() {
    return this.num
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
