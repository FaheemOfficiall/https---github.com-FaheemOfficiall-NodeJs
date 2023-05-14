// const express =require ("express");

import express from 'express';
import {getlib,postlib,putlib,patchlib,deletelib} from '../controllers/libControllers.js'

const libRouters= express.Router()

libRouters.get("/",getlib)

libRouters.get("/getlib",getlib)

libRouters.post("/postlib",postlib)

libRouters.put("/putlib",putlib)

libRouters.patch("/patchlib",patchlib)

libRouters.delete("/deletelib",deletelib)

// module.exports=libRouters;
export default libRouters;