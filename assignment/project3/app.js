import express from 'express'

const app=express();

const port = 3000;

app.set("view engine","ejs")
app.set("views","./views")

app.get('/home',(req,res)=>{
    res.render('main',{name:"faheem"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})