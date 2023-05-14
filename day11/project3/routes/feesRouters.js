// const express =require ("express");
import express from 'express';

const feesRouters= express.Router()

feesRouters.get("/",(req,res)=>{
    res.send("<h1>get fees</h1>")
})

feesRouters.get("/getfees",(req,res)=>{
    res.send("<h1>get fees</h1>")
})

feesRouters.post("/postfees",(req,res)=>{
    res.send("<h1>post fees</h1>")
})

feesRouters.put("/putfees",(req,res)=>{
    res.send("<h1>put fees</h1>")
})

feesRouters.patch("/patchfees",(req,res)=>{
    res.send("<h1>patch fees</h1>")
})

feesRouters.delete("/deletefees",(req,res)=>{
    res.send("<h1>delete fees</h1>")
})

// module.exports=feesRouters;

export default feesRouters;