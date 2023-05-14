const express = require('express')

const app = express();

// students routes

app.get('/',(req,res)=>{
    res.send("<h1>Get Student</h1>")
})

app.get('/student/getstudent',(req,res)=>{
    res.send("<h1>Get Student</h1>")
})

app.post('/student/poststudent',(req,res)=>{
    res.send('<h1>Post Student</h1>')
})

app.put('/student/putstudent',(req,res)=>{
    res.send('<h1>put Student</h1>')
})

app.patch('/student/patchstudent',(req,res)=>{
    res.send('<h1>patch Student</h1>')
})

app.delete('/student/deletestudent',(req,res)=>{
    res.send('<h1>delete Student</h1>')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});

//Teachers Routes

app.get('/',(req,res)=>{
    res.send('<h1>get teacher</h1>')
})

app.get('/teacher/getteacher',(req,res)=>{
    res.send('<h1>get teacher</h1>')
})

app.post('/teacher/postteacher',(req,res)=>{
    res.send('<h1>Post teacher</h1>')
})

app.put('/teacher/putteacher',(req,res)=>{
    res.send('<h1>put teacher</h1>')
})

app.patch('/teacher/patchteacher',(req,res)=>{
    res.send('<h1>patch teacher</h1>')
})

app.delete('/teacher/deleteteacher',(req,res)=>{
    res.send('<h1>delete teacher</h1>')
})


// lib

app.get('/',(req,res)=>{
    res.send('<h1>get lib</h1>')
})

app.get('/lib/getlib',(req,res)=>{
    res.send('<h1>get lib</h1>')
})

app.post('/lib/postlib',(req,res)=>{
    res.send('<h1>post lib</h1>')
})

app.put('/lib/putlib',(req,res)=>{
    res.send('<h1>put lib</h1>')
})

app.patch('/lib/patchlib',(req,res)=>{
    res.send('<h1>patch lib</h1>')
})

app.delete('/lib/deletelib',(req,res)=>{
    res.send('<h1>delete lib</h1>')
})

//lab

app.get('/lab/getlab',(req,res)=>{
    res.send('<h1>get lab</h1>')
})

app.post('/lab/postlab',(req,res)=>{
    res.send('<h1>post lab</h1>')
})

app.put('/lab/putlab',(req,res)=>{
    res.send('<h1>put lab</h1>')
})

app.patch('/lab/patchlab',(req,res)=>{
    res.send('<h1>patch lab</h1>')
})

app.delete('/lab/deleteteacher',(req,res)=>{
    res.send('<h1>delete teacher</h1>')
})

//fees

app.get('/',(req,res)=>{
    res.send('<h1>get fees</h1>')
})

app.get('/fees/getfees',(req,res)=>{
    res.send('<h1>get fees</h1>')
})

app.post('/fees/postfees',(req,res)=>{
    res.send('<h1>post fees</h1>')
})

app.put('/fees/putfees',(req,res)=>{
    res.send('<h1>put fees</h1>')
})

app.patch('/fees/patchfees',(req,res)=>{
    res.send('<h1>patch fees</h1>')
})

app.delete('/fees/deletefees',(req,res)=>{
    res.send('<h1>delete fees</h1>')
})