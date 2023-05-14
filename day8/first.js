const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("respon successfull ")
    console.log(req);
    
    res.end("res end")
})
let port=3000
server.listen(port,()=>{
    console.log(`Server run this port = ${port}`);
})