'use strict'

const PI = Math.PI

class Calculator {
  //write your code here
  constructor (result) {
    this._result = result
  }

  add (value) {
    this._result = this._result + value
    return this
  }

  substract (value) {
    this._result = this._result - value
    return this
  }

  multiply (value) {
    this._result = this._result * value
    return this
  }

  divide (value) {
    this._result = this._result / value
    return this
  }

  square (value) {
    this._result = this._result ** value
    return this
  }

  squareRoot () {
    this._result = Math.sqrt(this._result)
    return this
  }

  arroundCircle (){
    this._result = 2 * PI * this._result
    return this
  }

  wideCircle (){
    this._result = (this._result * this._result) * PI
    return this
  }

}

let calc = new Calculator(10)

// console.log(calc.wideCircle())
console.log(calc.add(4).substract(2).multiply(5).divide(6).square(2).squareRoot(2).wideCircle());

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
