'use strict'

class Calculator {
  //write your code here
  constructor (operand1) {
    this.operand1 = operand1;
    this.result = operand1;
  }
  add (operand2) {
    this.result = this.result + operand2;
    return this
  }
  substract (operand2) {
    this.result = this.result - operand2;
    return this
  }
  multiply (operand2) {
    this.result = this.result * operand2;
    return this
  }
  divide (operand2) {
    this.result = this.result / operand2;
    return this
  }
  square (power) {

    if(power>1){
      this.result = this.result * this.operand1;
      return this.square(power-1);
    }
    else{
      return this
    }
  }
  squareRoot (power) {

    this.result = Math.pow(this.operand1,power);
    return this;
  }

  phi(){
    this.result = this.result * (3.14);
    return this;
  }

  printResult(){
    return `${this.result}`
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
