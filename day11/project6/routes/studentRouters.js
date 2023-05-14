const express= require('express')
const studentDetails=require("../controllers/studentControllers.js")


const studentRouters=express.Router();


studentRouters.get("/",studentDetails.getstudent)

studentRouters.get("/getstudent",studentDetails.getstudent)

studentRouters.post("/poststudent",studentDetails.poststudent)

studentRouters.put("/putstudent",studentDetails.putstudent)

studentRouters.patch("/patchstudent",studentDetails.patchstudent)

studentRouters.delete("/deletestudent",studentDetails.deletestudent)


module.exports=studentRouters


