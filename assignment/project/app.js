import express from 'express'
import { join } from 'path'
const app = express()

const port = 3000;

app.use(express.static('views'))
app.use(express.static('public/images'))

app.use(express.static('videos'))


// app.get('/home',(req,res)=>{
//     res.send('<h1>Home</h1>')
// })

app.get('/home', (req, res) => {
    // res.sendFile(process.cwd(),'/views/index.html') 
    res.sendFile(join(process.cwd(), '/views/index.html'))

})

app.get('/filedownload', (req, res) => {
    res.download(join(process.cwd(), '/public/videos/be.mp4'))
})

app.get('/imgdownload', (req, res) => {
    res.download(join(process.cwd(), '/public/images/download.jpeg'))
})





app.listen(port,"192.168.1.12",() => {
    console.log('server is running' + port)
})