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

  circle (num) {
    this.hasil = 3.14 * (num * num);

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
console.log(calculator.add(6).substract(3).multiply(4))
console.log(calculator.circle(5).add(5))

module.exports = {
  Calculator
}
