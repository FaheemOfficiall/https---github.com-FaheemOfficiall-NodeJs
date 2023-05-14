import express from 'express'
import {join} from 'path'
const app=express()

const port=3000;

app.use(express.static('views'))

// app.get('/home',(req,res)=>{
//     res.send('<h1>Home</h1>')
// })

app.get('/home',(req,res)=>{
    // res.sendFile(process.cwd(),'/views/index.html') 
    res.sendFile(join(process.cwd(),'/views/index.html'))

})

app.get('/filedownload',(req,res)=>{
    res.download(join(process.cwd(),'/public/images/download.jpeg'))
})





app.listen(port,()=>{
    console.log('server is running'+port)
})