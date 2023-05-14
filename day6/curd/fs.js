const fs = require('fs');

fs.writeFile("test.txt","async File Created",(err,data)=>{
        return data
})

// fs.readFile("test.text",'utf-8',(err,data)=>{
//     console.log(data);
// })

fs.readFile("test.txt","utf-8",(err,data)=>{console.log(data);})
 
fs.appendFile("test.txt","Append Data recieved",(err,data)=>{
    return data
})

// fs.unlink("test.txt",(err,data)=>{return data});



// fs.writeFileSync("final.txt","Final data Insert")

// fs.writeFileSync("final.txt","second time Final data Insert")


