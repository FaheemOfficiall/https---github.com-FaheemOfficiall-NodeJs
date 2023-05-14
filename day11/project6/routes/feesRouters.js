const express = require("express");
const feesDetails=require("../controllers/feesControllers.js");

const feesRouters= express.Router();

feesDetails.getfees

feesRouters.get("/",feesDetails.getfees);

feesRouters.get("/getfees",feesDetails.getfees);

feesRouters.post("/postfees",feesDetails.postfees);

feesRouters.put("/putfees",feesDetails.putfees);

feesRouters.patch("/patchfees",feesDetails.patchfees);

feesRouters.delete("/deletefees",feesDetails.deletefees);

module.exports= feesRouters;