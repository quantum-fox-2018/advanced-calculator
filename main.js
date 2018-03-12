'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let hitung = new Calculator()
console.log(hitung.add(1).multiply(4).squareRoot().equal())

let hitung2 = new Calculator()
console.log(hitung.multiply(hitung.pi).equal())
