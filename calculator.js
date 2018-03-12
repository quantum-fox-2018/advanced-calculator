'use strict'

class Calculator {
  //write your code here
  constructor(num){
    this.number = num;
  }

  add(num){
    this.number += num;
    return this;
  }

  minus(num){
      this.number -= num;
      return this;
  }

  divide(num){
      this.number /= num;
      return this;
  }

  multiply(num){
      this.number *= num;
      return this;
  }

  square(power){
    let number = this.number;
    for(let counter = 0; counter<power; counter++){
        this.number *= number
    }
    return this;
  }

  squareRoot(){
      for(let counter=0; counter<this.number; counter++){
          if(counter*counter === this.number){
              this.number = counter;
              return this;
          }
      }
  }

  circleArea(radius){
    const pi = 3.14
    this.number = radius*radius*pi;
    return this;
  }

  circleCircumference(radius){
    const pi = 3.14
    this.number = 2*radius*pi;
    return this;
  }

  showResult(){
    console.log(this.number);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

var calculate = new Calculator(3);

calculate.add(1).squareRoot().showResult();

module.exports = {
  Calculator
}
