//Q15)Create a calculator using modules.
// add(x,y) in add.js file
// sub(x,y) in sub.js file
// mul(x,y) in mul.js file
// div(x,y) in div.js file
// call all this function in index.js file and display result

const add = require("./add")
const subs = require("./substraction")
const multi = require("./multip")
const modules = require ("./modules")
const divition = require ("./divid")

add.add(12,33);
subs.subs(12,33);
multi.multi(12,33);
modules.modules(12,33);
divition.div(12,33);




