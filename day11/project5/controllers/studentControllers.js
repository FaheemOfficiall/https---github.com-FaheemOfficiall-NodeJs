const getstudent=(req,res)=>{
    res.send("<h1>get student</h1>")
}

let poststudent=(req,res)=>{
    res.send("<h1>post student</h1>")
}

let putstudent=(req,res)=>{
    res.send("<h1>put student</h1>")
}

let patchstudent=(req,res)=>{
    res.send("<h1>patch student</h1>")
}

let deletestudent=(req,res)=>{
    res.send("<h1>delete student</h1>")
}


export{getstudent,poststudent,putstudent,patchstudent,deletestudent};