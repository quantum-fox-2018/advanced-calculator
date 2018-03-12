'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

var calculator = new Calculator(4);

console.log(calculator.add(2).multiply(3).printResult());
