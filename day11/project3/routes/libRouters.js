// const express =require ("express");

import express from 'express'

const libRouters= express.Router()

libRouters.get("/",(req,res)=>{
    res.send("<h1>get lib</h1>")
})

libRouters.get("/getlib",(req,res)=>{
    res.send("<h1>get lib</h1>")
})

libRouters.post("/postlib",(req,res)=>{
    res.send("<h1>post lib</h1>")
})

libRouters.put("/putlib",(req,res)=>{
    res.send("<h1>put lib</h1>")
})

libRouters.patch("/patchlib",(req,res)=>{
    res.send("<h1>patch lib</h1>")
})

libRouters.delete("/deletelib",(req,res)=>{
    res.send("<h1>delete lib</h1>")
})

// module.exports=libRouters;
export default libRouters;