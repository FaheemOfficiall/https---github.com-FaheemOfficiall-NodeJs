const express = require('express')
const studentRouters=require("./routes/studentRouters");
const teacherRouters= require("./routes/teacherRouters")
const labRouters= require("./routes/labRouters");
const libRouters = require("./routes/libRouters")
const feesRouters= require("./routes/feesRouters")
const app = express();
const port = 3000

app.use('/student',studentRouters);
app.use("/teacher",teacherRouters);
app.use("/lab",labRouters);
app.use("/lib",libRouters)
app.use("/fees",feesRouters)



app.listen(port,()=>{
    console.log('run at port no '+port);
})