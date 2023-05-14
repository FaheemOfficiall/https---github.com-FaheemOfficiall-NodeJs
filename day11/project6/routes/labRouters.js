const express = require("express")

const labDetails = require("../controllers/labControllers.js")

const labRouters = express.Router();


labRouters.get("/", labDetails.getlab)

labRouters.get("/getlab", labDetails.getlab)

labRouters.post("/postlab", labDetails.postlab)

labRouters.put("/putlab", labDetails.putlab)

labRouters.patch("/patchlab", labDetails.patchlab)

labRouters.delete("/deletelab", labDetails.deletelab)



module.exports = labRouters;