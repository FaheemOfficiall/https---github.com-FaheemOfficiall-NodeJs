import express from 'express';
import {join} from 'path';
import bodyParser from 'body-parser';
import fs from "fs"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static("./public/css"))

app.get('/home',(req,res)=>{
    res.sendFile(join(process.cwd(),"views","home.html"))
});

app.get('/login',(req,res)=>{
    res.sendFile(join(process.cwd(),"views","login.html"))
});

app.post("/login",(req,res)=>{
//    const data=  res.send(`${req.body.username} ${req.body.password}`)
//    fs.writeFileSync("data.text",data)
let username=req.body.username;
let password=req.body.password;
let data= fs.readFileSync("register.txt","utf-8")
console.log(data);
if (data.includes(username) & data.includes(password)) {
    res.send("succes")
    
    
}else {
    res.send("invalid User Details")
}


})
app.get("/register",(req,res)=>{
    res.sendFile(join(process.cwd(),"views","register.html"))

})

app.post("/register",(req,res)=>{
    let yourname=req.body.yourname;
    let email = req.body.email;
    let number = req.body.number;
    let password = req.body.password;
    
    
    //const data = res.send(`user ID: ${req.body.yourname}  number:  ${req.body.number} password: ${req.body.email} ${req.body.password}`)
fs.writeFileSync('./register.txt',`${yourname} ${email} ${number} ${password}`);
res.send('success');
})

app.listen(port,()=>{
    console.log("server is running "+port)
});