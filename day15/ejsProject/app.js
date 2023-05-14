import express from "express"
import homeRoute from "./routers/homeRoute.js";


const app=express();

const port = 3000

app.set("views","./views");
app.set("view engine","ejs")

app.use("/home",homeRoute)


app.listen(port,()=>{
    console.log("server is running on port :"+port)
})