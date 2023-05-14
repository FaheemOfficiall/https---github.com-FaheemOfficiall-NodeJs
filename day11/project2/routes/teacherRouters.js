const express = require('express')

const teacherRouters = express.Router()

teacherRouters.get("/",(req,res)=>{
    res.send("<h1>get teacher</h1>")
})

teacherRouters.get("/getteacher",(req,res)=>{
    res.send("<h1>get teacher</h1>")
})

teacherRouters.post("/postteacher",(req,res)=>{
    res.send("<h1>post teacher</h1>")
})

teacherRouters.put("/putteacher",(req,res)=>{
    res.send("<h1>put teacher</h1>")
})

teacherRouters.patch("/patchteacher",(req,res)=>{
    res.send("<h1>patch teacher</h1>")
})

teacherRouters.delete("/deleteteacher",(req,res)=>{
    res.send("<h1>delete teacher</h1>")
})

module.exports=teacherRouters