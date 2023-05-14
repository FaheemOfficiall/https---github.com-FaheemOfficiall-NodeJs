const fs = require('fs')
const writefun = (err,data)=>{
    fs.writeFile('4.txt',data,(err)=>{
        console.log('data copied');
    })
}

module.exports={writefun}