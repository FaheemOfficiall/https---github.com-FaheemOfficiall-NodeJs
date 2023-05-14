// const express= require('express')

import express from 'express';
import {getstudent,poststudent,putstudent,patchstudent,deletestudent} from '../controllers/studentControllers.js'
// console.log(getstudent);
const studentRouters=express.Router();

studentRouters.get('/',getstudent)

studentRouters.get('/getstudent',getstudent)

studentRouters.post('/poststudent',poststudent)

studentRouters.put('/putstudent',putstudent)

studentRouters.patch('/patchstudent',patchstudent)

studentRouters.delete('/deletestudent',deletestudent)

// module.exports=studentRouters

export default studentRouters;
