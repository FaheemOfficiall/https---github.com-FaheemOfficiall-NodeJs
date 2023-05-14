// const { request } = require("express");

async function fun1(req,res){
    let response= await request.get('http://localhost:3000');
    if(response.err){console.log("error");}
    else{console.log('fecthed response');}
}   