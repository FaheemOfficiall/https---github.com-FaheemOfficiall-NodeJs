import express, { json } from 'express'
import {join} from 'path'
import bodyParser from 'body-parser'
import fs from 'fs'


const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:false}))

app.get("/home",(req,res)=>{
    res.sendFile(join(process.cwd(),"views/main.html"))
})

app.post("/create",(req,res)=>{
    let username =req.body.username;
    let number = req.body.number;
    let email = req.body.email;
    let password=req.body.password
    // fs.writeFileSync("/data.txt",conjson)
    
    //  joint=join(username,number,email,password)
    const final =fs.writeFileSync("data.json",`userName: ${username} Number : ${number} Email: ${email} password: ${password}`)

    
    // console.log(data);
    
    res.send("Data Saved Successfully");
})

app.listen(port,"192.168.1.12",()=>{
    console.log("server is running"+port);
})