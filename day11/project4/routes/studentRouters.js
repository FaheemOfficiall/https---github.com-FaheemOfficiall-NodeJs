const express= require('express')
const stdDetails =require("../controllers/studentController.js")
const studentRouters=express.Router();

// let stdget=(req,res)=>{
//     res.send("<h1>get student</h1>")
    
// }

// let stdpost=(req,res)=>{
//     res.send("<h1>post student</h1>")
// }

// let stdput=(req,res)=>{
//     res.send("<h1>put student</h1>")
    
// }

// let stdpatch=(req,res)=>{
//     res.send("<h1>patch student</h1>")
    
// }

// let stddelete=(req,res)=>{
//     res.send("<h1>delete student</h1>")
    
// }
studentRouters.get('/',stdDetails.stdget)

studentRouters.get('/getstudent',stdDetails.stdget)

studentRouters.post('/poststudent',stdDetails.stdpost)

studentRouters.put('/putstudent',stdDetails.stdput)

studentRouters.patch('/patchstudent',stdDetails.stdpatch)

studentRouters.delete('/deletestudent',stdDetails.stddelete)

module.exports=studentRouters;
