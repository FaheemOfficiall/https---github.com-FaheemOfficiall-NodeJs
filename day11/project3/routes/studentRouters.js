// const express= require('express')

import express from 'express'

const studentRouters=express.Router();

studentRouters.get('/',(req,res)=>{
    res.send("<h1>get student</h1>")
    
})

studentRouters.get('/getstudent',(req,res)=>{
    res.send("<h1>get student</h1>")
    
})

studentRouters.post('/poststudent',(req,res)=>{
    res.send("<h1>post student</h1>")
})

studentRouters.put('/putstudent',(req,res)=>{
    res.send("<h1>put student</h1>")
    
})

studentRouters.patch('/patchstudent',(req,res)=>{
    res.send("<h1>patch student</h1>")
    
})

studentRouters.delete('/deletestudent',(req,res)=>{
    res.send("<h1>delete student</h1>")
    
})

// module.exports=studentRouters

export default studentRouters;
