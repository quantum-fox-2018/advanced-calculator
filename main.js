'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calculator = new Calculator();

console.log(calculator.initNumber(10).divide(3).equal());

console.log(calculator.initNumber(2).add(3).equal());