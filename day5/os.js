// const { log } = require("console");
const os=require("os")
// import os from "os";

console.log("Available memory = "+Math.ceil (os.freemem()/1024/1024/1024)+"GB");
// console.log(os.platform);

console.log("Total Memory Giga Byte Is = "+Math.ceil(os.totalmem()/1024/1024/1024) ,"GB" );
console.log("Total Memory in Tera Bytes Is = "+Math.ceil(os.totalmem()/1024/1024/1024/1024) ,"TB" );


console.log('os.machin = '+os.machine());

// console.log("Os.cpus = "+os.cpus());

console.log("Os.release = "+os.release()); 

console.log("Os.tmpdir = "+os.tmpdir());

console.log("Os.type = "+os.type());

console.log("Os.uptime = "+os.uptime);

console.log(os.cpus());

console.log(os.userInfo());

console.log("Os.version = "+os.version());

console.log(os.endianness());

console.log(os.arch());

console.log(os.constants.UV_UDP_REUSEADDR);

console.log(os.constants.signals);