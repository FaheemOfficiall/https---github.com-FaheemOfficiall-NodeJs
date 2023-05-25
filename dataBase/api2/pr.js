import express from 'express'
import bodyParser from 'body-parser';
const app=express();

import mongoose from "mongoose";

let dbURL='mongodb://localhost:27017/';
let dbName='softCadiaDB';
//mongoose.connect('mongodb://localhost:27017/softCadiaDB');
mongoose.connect(dbURL+dbName);
var db = mongoose.connection;
db.once('open',()=>{
    console.log('connected to DB successfully');
});
db.on('error',(err)=>{
    console.log('error occured while database connection');
});

let userSchema=mongoose.Schema( {
    firstName :String
    ,lastName :String
    ,mobileNumber :Number
    ,email :String
    ,password :String
});
 let userModel=mongoose.model('user',userSchema);

let addUser=async (fname,lname,mobile,email,pass)=>{
    let user =new userModel( {firstName:fname,lastName:lname,mobileNumber:mobile,email:email,password:pass});

    await user.save();
    console.log('user added successfully');
}



let port =5000;
app.use(bodyParser.urlencoded({extended:false}));

app.post('/addUser',(req,res)=>{
 //let firstName=req.body.firstName;
 let {firstName,lastName,mobileNumber,email,password}=req.body;
 addUser(firstName,lastName,mobileNumber,email,password);
 //function which will save data into data base
 res.send('user added successfully');

});

app.listen(port,()=>{
    console.log('servver started');
});