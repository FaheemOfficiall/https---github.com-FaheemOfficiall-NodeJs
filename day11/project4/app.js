// import express from 'express'
const express = require('express')
const studentRouters=require('./routes/studentRouters.js');
// const stdDetails=require("")

const app=express()

const port =3000;


app.use('/student',studentRouters);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})