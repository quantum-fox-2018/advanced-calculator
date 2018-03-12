'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this._angka = number
  }

  add (number) {

     this._angka += number

     return this

  }

  substract (number) {

    this._angka -= number

    return this

  }

  multiply (number) {

    this._angka *= number

    return this

  }

  divide (number) {

    this._angka /= number

    return this

  }

  square (number) {

    this._angka = Math.pow(this._angka, number)

    return this

  }

  squareRoot (number) {

    this._angka = Math.sqrt(this._angka, number)

    return this

  }

  phi () {

    this._angka =  (this._angka * Math.PI) *2

    return this

  }

  count (number) {

    console.log(this._angka);

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
