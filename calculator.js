'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num1, num2 = 0) {
    this.number = num1 + num2
    return this
  }
  substract (num1, num2 = 0) {
    this.number = num1 - num2
    return this
  }
  multiply (num1, num2 = 1) {
    this.number = num1 * num2
    return this
  }
  divide (num1, num2 = 1) {
    this.number = num1 / num2
    return this
  }
  square (num1, num2 = 1) {
    this.number = Math.pow(num1, num2)
    return this
  }
  squareRoot (num) {
    this.number = Math.sqrt(num)
    return this
  }
  circleArea(radius){
    const phi = 3.14
    this.number = phi * Math.pow(radius,2)
    return this
  }
  circumference(radius){
    const phi = 3.14
    this.number = 2 * phi * radius
    return this
  }
  result(){
    return `Hasil : ${this.number}`
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let calculate = new Calculator()
console.log(calculate.squareRoot(9).result());

module.exports = {
  Calculator
}
