import express from 'express'
import studentRoutes from './routers/studentRoute.js'
import employeeRoute from './routers/employeeRoute.js';

const app = express();
const port=3000;

app.use("/student",studentRoutes);
app.use("/employee",employeeRoute);

app.listen(port,()=>{
    console.log('server is running on port'+port)
});