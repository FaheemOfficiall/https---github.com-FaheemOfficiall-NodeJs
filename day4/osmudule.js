// const { log } = require("console");
const os=require("os");

const fs=require("fs")

let arc=os.arch();
console.log(arc);

let freemem=os.freemem()
console.log(freemem);

let totalmem=os.platform()
console.log(totalmem)

//fs module

