const express = require('express')
// const  dashboard = require('./dashboard.js')
const os = require('os')


// const all=
// console.log(os.);

const app = express();
let port = 3000;
const ip='192.168.1.52'

//dashboard api


// dashboard.dashboard()

app.get('/dashboard', (req, res) => {
    res.send('<h1>get Faheem<h1/>');
})

app.post('/dashboard', (req, res) => {
    res.send('<h1>post dashboard</h1>');
})

app.put('/dashboard', (req, res) => {
    res.send('<h1>put dashBoard<h1/>');
})

app.patch('/dashboard', (req, res) => {
    res.send('<h1>patch dashboard<h1/>');
})

app.delete('/dashboard', (req, res) => {
    res.send('<h1>delete dashboard<h1/>');
})

//courses api

app.get('/courses', (req, res) => {
    res.send('<h1>get courses<h1/>');
})

app.post('/courses', (req, res) => {
    res.send('<h1>post courses</h1>');
})

app.put('/courses', (req, res) => {
    res.send('<h1>put courses<h1/>');
})

app.patch('/courses', (req, res) => {
    res.send('<h1>patch courses<h1/>');
})

app.delete('/courses', (req, res) => {
    res.send('<h1>delete courses<h1/>');
})

//contact api

app.get('/contact us', (req, res) => {
    res.send('<h1>get contact us<h1/>');
})

app.post('/courses', (req, res) => {
    res.send('<h1>post courses</h1>');
})

app.put('/contact us', (req, res) => {
    res.send('<h1>put contact us<h1/>');
})

app.patch('/contact us', (req, res) => {
    res.send('<h1>patch contact us<h1/>');
})

app.delete('/contact us', (req, res) => {
    res.send('<h1>delete contact us<h1/>');
})

//about us

app.get('/about us', (req, res) => {
    res.send('<h1>get about us<h1/>');
})

app.post('/courses', (req, res) => {
    res.send('<h1>post courses</h1>');
})

app.put('/about us', (req, res) => {
    res.send('<h1>put about us<h1/>');
})

app.patch('/about us', (req, res) => {
    res.send('<h1>patch about us<h1/>');
})

app.delete('/about us', (req, res) => {
    res.send('<h1>delete about us<h1/>');
})

//employee api

app.get('/employee', (req, res) => {
    res.send('<h1>get employee<h1/>');
})

app.post('/employee', (req, res) => {
    res.send('<h1>post employee</h1>');
})

app.put('/employee', (req, res) => {
    res.send('<h1>put employee<h1/>');
})

app.patch('/employee', (req, res) => {
    res.send('<h1>patch employee<h1/>');
})

app.delete('/employee', (req, res) => {
    res.send('<h1>delete employee<h1/>');
})

app.all('*/',(req,res)=>{
    res.send('<h1>Page Not Found</h1>')
})



// app.put('/put',(req,res)=>{
//     res.send('<h1>put<h1/>');
// })

// app.patch('/patch',(req,res)=>{
//     res.send('<h1>patch<h1/>');
// })

// app.delete('/delete',(req,res)=>{
//     res.send('<h1>delete<h1/>');
// })

app.listen(port,ip, () => {
    console.log('server is running on port ' + port);
})

