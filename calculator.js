'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num=num
  }
  add (numAdd) {
    this.num+=numAdd
    return this
  }
  substract (numSub) {
    this.num-=numSub
    return this
  }
  multiply (numMul) {
    this.num*=numMul
    return this
  }
  divide (numDiv) {
    this.num/=numDiv
    return this
  }
  square (numSqr) {
    this.num=Math.pow(this.num,numSqr)
    return this
  }
  squareRoot (numRoot) {
    this.num=Math.ceil(Math.pow(this.num, 1/numRoot));
    return this
  }
  pi(){
    this.num=this.num*Math.PI;
    return this
  }
  result(){
    console.log('Result : '+this.num);
  }
}

const newCalc = new Calculator(3)
newCalc.add(6).substract(2).multiply(3).divide(7).square(3).squareRoot(3).pi();
newCalc.result()

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
