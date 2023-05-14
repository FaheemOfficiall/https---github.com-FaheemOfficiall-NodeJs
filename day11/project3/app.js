import express from 'express';


import feesRouters from './routes/feesRouters.js';
import labRouters from './routes/labRouters.js';
import libRouters from './routes/libRouters.js';
import studentRouters from './routes/studentRouters.js';
import teacherRouters from './routes/teacherRouters.js';


const app=express();
const port = 3000;

app.use("/fees",feesRouters)
app.use("/lab",labRouters)
app.use("/lib",libRouters)
app.use("/student",studentRouters)
app.use("/teacher",teacherRouters)


app.listen(port,()=>{
    console.log("run on port no"+port);
})

