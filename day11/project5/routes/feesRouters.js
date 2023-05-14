// const express =require ("express");
import express from 'express';
import {getfees,postfees,putfees,patchfees,deletefees} from '../controllers/feesControllers.js'
const feesRouters= express.Router()



feesRouters.get("/",getfees)

feesRouters.get("/getfees",getfees)

feesRouters.post("/postfees",postfees)

feesRouters.put("/putfees",putfees)

feesRouters.patch("/patchfees",patchfees)

feesRouters.delete("/deletefees",deletefees)

// module.exports=feesRouters;

export default feesRouters;