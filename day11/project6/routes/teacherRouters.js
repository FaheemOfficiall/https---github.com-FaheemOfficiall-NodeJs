const express = require('express')
const teacherDetails=require("../controllers/teacherControllers")

// console.log(teacherDetails);

const teacherRouters =express.Router();


teacherRouters.get("/",teacherDetails.getteacher)

teacherRouters.get("/getteacher",teacherDetails.getteacher)

teacherRouters.post("/postteacher",teacherDetails.postteacher)

teacherRouters.put("/putteacher",teacherDetails.putteacher)

teacherRouters.patch("/patchteacher",teacherDetails.patchteacher)

teacherRouters.delete("/deleteteacher",teacherDetails.deleteteacher)

module.exports=teacherRouters;

