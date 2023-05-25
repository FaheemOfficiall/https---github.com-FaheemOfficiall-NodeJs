import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import mongoose from 'mongoose';

const app=express()
const port =process.env.port || 5000;
const DATA_BASE_URI = process.env.DATA_BASE_URI || 'mongodb://0.0.0.0:27017/';

const dbName = "SoftCadia"

mongoose.connect(DATA_BASE_URI+dbName)
const db = mongoose.connection
db.once("open",()=>console.log("connected to db"+dbName));
db.on("error",()=>{console.log("error");})


const createToken=async()=>{
    jsonwebtoken.sign({_id})
}
// console.log(createToken);











app.listen(port,()=>{
    console.log("connect to port" +port);
})