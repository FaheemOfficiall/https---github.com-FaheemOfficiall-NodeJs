const express = require("express")

const labRouters=express.Router();

labRouters.get("/",(req,res)=>{
    res.send("<h1>get lab</h1>");
})

labRouters.get("/getlab",(req,res)=>{
    res.send("<h1>get lab</h1>");
})

labRouters.post("/postlab",(req,res)=>{
    res.send("<h1>post lab</h1>");
})

labRouters.put("/putlab",(req,res)=>{
    res.send("<h1>put lab</h1>");
})

labRouters.patch("/patchlab",(req,res)=>{
    res.send("<h1>patch lab</h1>");
})

labRouters.delete("/deletelab",(req,res)=>{
    res.send("<h1>delete lab</h1>");
})

module.exports=labRouters;