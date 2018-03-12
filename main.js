'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var cal = new Calculator(2);
cal.add(1).divide(1).multiply(2).resultCal();
cal.square(2).multiply(2).resultCal();
cal.circleAround().resultCal();
