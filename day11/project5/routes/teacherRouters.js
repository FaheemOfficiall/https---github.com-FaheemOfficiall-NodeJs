// const express = require('express')

import express from 'express'
import {getteacher,postteacher,putteacher,patchteacher,deleteteacher} from '../controllers/teacherControllers.js'


const teacherRouters = express.Router()

teacherRouters.get("/",getteacher)

teacherRouters.get("/getteacher",getteacher)

teacherRouters.post("/postteacher",postteacher)

teacherRouters.put("/putteacher",putteacher)

teacherRouters.patch("/patchteacher",patchteacher)

teacherRouters.delete("/deleteteacher",deleteteacher)

// module.exports=teacherRouters

export default teacherRouters;