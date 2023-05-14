const fs = require("fs")

fs.writeFileSync("read.text","The File Created");

fs.writeFileSync("read.text","Created and update The File Delete OLd data");
// fs.writeFileSync("read.html","The File Created");

const buf_data= fs.readFileSync('./read.text','utf-8');

console.log(buf_data);

const append=fs.appendFileSync("./read.text"," I Am Append Data Throw Function")

const append_data= fs.readFileSync('./read.text','utf-8');


console.log(append_data);

// fs.mkdirSync("day7",)

// fs.unlinkSync("read.text");
// fs.rmdirSync("day7");

fs.writeFileSync("test.txt","Create File");

fs.readFile("test.txt","utf-8",(err,data)=>{
    if (data) {
         console.log(data);
        
     }else{
        console.log(err+"Error Agya File Not Found");
     }
    }
     )