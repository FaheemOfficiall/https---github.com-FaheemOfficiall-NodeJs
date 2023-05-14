const express = require('express')

const app = express();

const port = 3000;

app.get('/home',(req,res)=>{
    res.send('<h1>Home Page</h1> <h2>getting res from get</h2> <h5>Loading</h5>')
})

app.post('/about',(req,res)=>{
    res.send('<h1>about us Page</h1><h2>getting res from post</h2> <h5>Loading</h5>')
})

app.put('/contact',(req,res)=>{
    res.send('<h1>Contact us Page </h1><h2>getting res from put</h2> <h5>Loading</h5>')
})

app.patch('/contact',(req,res)=>{
    res.send('<h1>Contact us Page </h1><h2>getting res from put</h2> <h2>getting res from patch</h2> <h5>Loading</h5>')
})
app.delete('/delete',(req,res)=>{
    res.send('<h1>Contact us Page </h1> <h2>getting res from delete</h2> <h5>Loading</h5>')
    
})

// app.use(()=>{
//     res.send('<h1>404 Page </h1> <h2>getting res from 404</h2> <h5>Loading</h5>')
// })

app.listen(port,'127.0.0.1',()=>{
    console.log(`server start with port ${port}`);
})

// app.listen(5000,()=>{
//     console.log('server start with port 5000');
// })