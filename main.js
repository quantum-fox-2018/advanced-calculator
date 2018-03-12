'use strict'

const {Calculator} = require("./calculator.js")

const five = new Calculator(5);

console.log(five.areaOfCircle()); // input number adalah jari jari
console.log(five.add(5).substract(2).divide(2).multiply(9).squareRoot().square(3));
