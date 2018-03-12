'use strict'

const {Calculator} = require("./calculator.js")

var newCalculator = new Calculator()
// execute function on calculator.js in here
console.log(newCalculator.add(1,2).hasil)
console.log(newCalculator.substract(1,2).hasil)
console.log(newCalculator.multiply(1,2).hasil)
console.log(newCalculator.divide(1,2).hasil)
console.log(newCalculator.square(1,2).hasil)
console.log(newCalculator.squareRoot(1,2).hasil)
