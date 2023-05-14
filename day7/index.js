const fs = require('fs')
const writefun= require('./write')
// sync
const filesToCopy = fs.readFileSync('./1.txt','utf-8')

console.log(filesToCopy);


fs.writeFileSync("final.txt",filesToCopy);


//async

const data = fs.readFile('./1.txt','utf-8',(err,data)=>{
    // return data

    fs.writeFile('2.txt',data,()=>{
        console.log('file changed');
    });
    // console.log(data);
});
 
//seperate function to use multiple times

// const writefun = (err,data)=>{
//     fs.writeFile('4.txt',data,(err)=>{
//         console.log('data copied');
//     })
// }

// writefun require function used this time
const readfile = fs.readFile('./1.txt','utf-8',writefun.writefun); 