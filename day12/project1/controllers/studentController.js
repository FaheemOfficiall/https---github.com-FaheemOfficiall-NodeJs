const getstudent = (req,res)=>{
    res.send("<h1>Get student</h1>")
}

const poststudent = (req,res)=>{
    res.send("<h1>post student</h1>")
}

export {getstudent,poststudent}