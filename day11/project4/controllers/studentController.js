let stdget=(req,res)=>{
    res.send("<h1>get student</h1>")
    
}

let stdpost=(req,res)=>{
    res.send("<h1>post student</h1>")
}

let stdput=(req,res)=>{
    res.send("<h1>put student</h1>")
    
}

let stdpatch=(req,res)=>{
    res.send("<h1>patch student</h1>")
    
}

let stddelete=(req,res)=>{
    res.send("<h1>delete student</h1>")
    
}

module.exports={stdget,stdpost,stdput,stdpatch,stddelete}