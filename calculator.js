'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num) {
    this.number +=num
    return this
  }
  substract (num) {
    this.number -=num
    return this
  }
  multiply (num) {
    this.number *=num
    return this
  }
  divide (num) {
    this.number /=num
    return this
  }
  square (num) {
    var tmp = this.number
    for(var i = 1; i < num; i++){
      this.number *= tmp
    }
    return this
  }
  squareRoot () {
    var tmp = this.number
    this.number = Math.sqrt(tmp)
    return this
  }
  circle(){
    const pi = 3.14
    var radius = this.number/2
    this.number = 2*pi*radius
    return this
  }
  circleArea(){
    const pi = 3.14
    var radius = this.number/2
    this.number = pi*(radius*radius)
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
var input = new Calculator(10)
console.log(input.add(2).substract(2).squareRoot())
//console.log(input.circleArea());
module.exports = {
  Calculator
}
