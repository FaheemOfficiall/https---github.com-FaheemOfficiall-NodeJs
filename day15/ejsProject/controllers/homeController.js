const homeController=(req,res)=>{
    res.render(`index`,{name:req.params.firstname,age:"23"})
}

export {homeController}