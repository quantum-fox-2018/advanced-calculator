'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calc = new Calculator(8);
console.log(calc.add(7).multiply(2).divide(5).substract(2).square(3).squareRoot(2).circleArea().circleLength().result());
