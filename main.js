'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calculate = new Calculator(8);

console.log(calculate.add(2)
  .multiply(2)
  .divide(5)
  .square(2) // 4 //16
  .squareRoot() // 4
  .printResult());

var circle = new Calculator(5);

console.log(circle.circleCircumference().printResult());
