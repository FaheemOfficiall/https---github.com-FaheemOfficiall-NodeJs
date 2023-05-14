const express = require('express')
const libDetails = require("../controllers/libControllers.js");

const libRouters= express.Router();

libRouters.get("/",libDetails.getlib)

libRouters.get("/getlib",libDetails.getlib)

libRouters.post("/postlib",libDetails.postlib)

libRouters.put("/putlib",libDetails.putlib)

libRouters.patch("/patchlib",libDetails.patchlib)

libRouters.delete("/deletelib",libDetails.deletelib)

module.exports=libRouters;