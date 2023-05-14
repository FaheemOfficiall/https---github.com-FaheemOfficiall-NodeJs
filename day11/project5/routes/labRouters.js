// const express = require("express")
import express from 'express'
import {getlab,postlab,putlab,patchlab,deletelab} from '../controllers/labControllers.js'

const labRouters=express.Router();

labRouters.get("/",getlab)

labRouters.get("/getlab",getlab)

labRouters.post("/postlab",postlab)

labRouters.put("/putlab",putlab)

labRouters.patch("/patchlab",patchlab)

labRouters.delete("/deletelab",deletelab)

// module.exports=labRouters;

export default labRouters;