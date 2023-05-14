const getlab=(req,res)=>{
    res.send("<h1>get lab</h1>")
}

let postlab=(req,res)=>{
    res.send("<h1>post lab</h1>")
}

let putlab=(req,res)=>{
    res.send("<h1>put lab</h1>")
}

let patchlab=(req,res)=>{
    res.send("<h1>patch lab</h1>")
}

let deletelab=(req,res)=>{
    res.send("<h1>delete lab</h1>")
}
module.exports={getlab,postlab,putlab,patchlab,deletelab};

