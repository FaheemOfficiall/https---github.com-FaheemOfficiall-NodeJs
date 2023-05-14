const fs = require('fs')

const data = fs.readFileSync("./1.txt",'utf-8')

// fs.writeFileSync("final.txt",data.toLowerCase());
fs.writeFileSync("final.txt",data.toUpperCase());5
// fs.writeFileSync("final.txt",data.trim(""));