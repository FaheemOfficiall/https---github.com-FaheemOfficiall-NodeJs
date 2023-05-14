import express from 'express';

import teacherRouters  from './routes/teacherRouters.js';
import feesRouters from './routes/feesRouters.js';
import studentRouters from './routes/studentRouters.js';
import libRouters from './routes/libRouters.js';
import labRouters from './routes/labRouters.js';


const app=express()
const port=3000;

app.use("/teacher",teacherRouters);
app.use("/student",studentRouters)
app.use("/fees",feesRouters)
app.use("/lib",libRouters)
app.use("/lab",labRouters)

app.listen(port,()=>{
    console.log("server run on port "+port);
})