// Q10)write a module which will perform addition of n numbers.
// use that module in main.js module

function add(...nums) {
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum;
  }
  
  module.exports = {add}