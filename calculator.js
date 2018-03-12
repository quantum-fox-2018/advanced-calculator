'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num) {
    this.number += num;
    return this
  }
  substract (num) {
    this.number -= num;
    return this
  }
  multiply (num) {
    this.number *= num;
    return this
  }
  divide (num) {
    this.number /= num;
    return this
  }
  square (power) {
    let number = this.number
    for (let i = 0; i < power; i++) {
      this.number *= number
    }
    return this
  }
  squareRoot () {
    // for (var i = 0; i < this.number; i++) {
    //   if (i * i === this.number) {
    //     this.number = i
    //     return this
    //   }
    // }
    // var sqrt = this.number
    this.number = Math.sqrt(this.number)
    return this
  }
  circleArea(radius) {
    const pi = 22/7
    this.number = pi * (radius*radius)
    return this
  }
  circleCirc(radius) {
    const po = 22/7
    this.number = 2 * pi * radius
    return this
  }

  show() {
    return this.number
  }
}

var calculator = new Calculator(9)

console.log(calculator.squareRoot());

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
