const getfees=(req,res)=>{
    res.send("<h1>get fees</h1>")
}

let postfees=(req,res)=>{
    res.send("<h1>post fees</h1>")
}

let putfees=(req,res)=>{
    res.send("<h1>put fees</h1>")
}

let patchfees=(req,res)=>{
    res.send("<h1>patch fees</h1>")
}

let deletefees=(req,res)=>{
    res.send("<h1>delete fees</h1>")
}


export{getfees,postfees,putfees,patchfees,deletefees};