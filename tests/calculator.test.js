const calculator = require("../models/calculator.js") 

test("sum 2+2",() =>{
  const result = calculator.sum(2,2);
  expect(result).toBe(4)
})

test("sum 100+105",() =>{
  const result = calculator.sum(100,105);
  expect(result).toBe(205)
})