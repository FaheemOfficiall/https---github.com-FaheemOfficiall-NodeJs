const express = require("express")

const teacherRouters=require("./routes/teacherRouters.js")
const feesRouters = require("./routes/feesRouters.js")
const studentRouters = require("./routes/studentRouters.js")
const libRouters = require("./routes/libRouters.js")
const labRouters = require("./routes/labRouters.js")

const app=express()
const port=3000;

// console.log(teacherRouters);
app.use("/teacher",teacherRouters);
app.use("/student",studentRouters)
app.use("/fees",feesRouters)
app.use("/lib",libRouters)
app.use("/lab",labRouters)

app.listen(port,()=>{
    console.log("server run on port "+port);
})