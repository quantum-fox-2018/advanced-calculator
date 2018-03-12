/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
'use strict';

class Calculator {
  //write your code here
  constructor(number) {
    this.angka = number;
  }

  add(number) {
    this.angka += number;
    return this;
  }

  substract(number) {
    this.angka -= number;
    return this;
  }

  multiply(number) {
    this.angka *= number;
    return this;
  }

  divide(number) {
    this.angka /= number;
    return this;
  }

  square(number) {
    this.angka = Math.pow(this.angka, number);
    return this;

  }
  squareRoot(number) {
    this.angka = Math.sqrt(this.angka);
    return this;
  }

  circleArea() {
    const pi = 3.14;
    this.angka *= this.angka * pi;
    return this;
  }

  circleAround() {
    const pi = 3.14;
    this.angka *= this.angka * 2 * pi;
    return this;
  }
  resultCal() {
    console.log(this.angka);
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
};
