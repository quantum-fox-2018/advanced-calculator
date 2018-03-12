'use strict'

const {Calculator} = require("./calculator.js")

const kalkulator = new Calculator(2)

console.log(kalkulator.add(13).substract(3).multiply(2).divide(6).square(2).squareRoot(2).konstantaPi().hasil());
