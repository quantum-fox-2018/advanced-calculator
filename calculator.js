'use strict'

class Calculator {
  //write your code here
  constructor () {
  }

  initNumber(num){
    this.number = num;
    return this
  }


  add (addnum) {
  this.number += addnum

  return this
  }

  substract (substractnum) {
    this.number -= substractnum
    return this
  }
  multiply (mulNum) {
    this.number *= mulNum
    return this
  }
  divide (divNum) {
    this.number  /= divNum
    return this
  }
  square (sqNum) {
    this.number = Math.pow(this.number, sqNum)
    return this
  }
  squareRoot (sqrNum) {
    this.number = sqrNum
    this.number = Math.sqrt(this.number)
    return this
  }
  circleArea(cirNum){
    this.number = cirNum
    if (this.number % 7 === 0) {
      this.number = (22 / 7) * this.number * this.number;
    } else {
      this.number = 3.14 * this.number * this.number;
    }
    return this
  }
}
//var hitung = new Calculator()
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

//console.log(hitung.add(10));




 module.exports = {
   Calculator
}
