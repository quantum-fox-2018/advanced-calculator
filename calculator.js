'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.hasil = num
  }
  add (numAdd) {
    this.hasil = this.hasil + numAdd

    return this
  }
  substract (numSub) {
    this.hasil = this.hasil - numSub

    return this;
  }
  multiply (numMul) {
    this.hasil = this.hasil * numMul

    return this;
  }
  divide (num) {
    this.hasil = this.hasil / num

    return this;
  }
  square (num) {
    this.hasil = Math.pow(this.hasil, num);

    return this;
  }
  squareRoot (num) {
    this.hasil = Math,sqrt(this.hasil, num)

    return this;
  }

  circle () {
    this.hasil = 3.14 * this.hasil;

    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

var calculator = new Calculator(5)

// console.log(calculator.add(4))
console.log(calculator.add(6).substract(5).multiply(5))
console.log(calculator.circle())

module.exports = {
  Calculator
}
