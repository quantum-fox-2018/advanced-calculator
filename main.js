'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calculator = new Calculator(5)
console.log(calculator.add(6).substract(3).multiply(4))
