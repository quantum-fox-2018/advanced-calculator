'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value = value
    return this
  }
  add (value) {
    this.value = this.value + value
    return this
  }
  substract (value) {
    this.value = this.value - value
    return this
  }
  multiply (value) {
    this.value = this.value * value
    return this
  }
  divide (value) {
    this.value = this.value / value
    return this
  }
  square (value) {
    this.value = Math.pow(this.value, value)
    return this
  }
  squareRoot () {
    this.value = Math.pow(this.value, 0.5)
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
