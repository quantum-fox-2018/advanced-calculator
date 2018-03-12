'use strict'

class Calculator {
  //write your code here
  constructor (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
  }
  add (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = angka1 + angka2
    return this
  }
  substract (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = angka1 - angka2
    return this
  }
  multiply (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = angka1 * angka2
    return this
  }
  divide (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = angka1 / angka2
    return this
  }
  square (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = Math.pow(angka1,angka2)
    return this
  }
  squareRoot (angka1, angka2) {
    this.angka1 = angka1
    this.angka2 = angka2
    this.hasil = Math.sqrt(angka1,angka2)
    return this
  }
  diameter (jari2){
    this.jari2 = jari2
    this.hasil = 2 * jari2
    return this
  }
  kelilingLingkaran(jari2){
    this.jari2 = jari2
    this.hasil = 3.14 * (2*jari2)
    return hasil
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
