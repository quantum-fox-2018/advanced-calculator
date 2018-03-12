'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var hitung = new Calculator()
console.log(hitung.initNumber(10).add(2));
console.log(hitung.initNumber(20).substract(16));
console.log(hitung.initNumber(20).multiply(16));
console.log(hitung.initNumber(20).divide(4));
console.log(hitung.initNumber(20).square(2));
console.log(hitung.squareRoot(100));
console.log(hitung.circleArea(7));
