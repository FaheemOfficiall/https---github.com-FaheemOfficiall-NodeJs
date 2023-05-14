const upperCase=require('upper-case')
const express = require('express')
let str = "Faheem Khan"

// console.log(upperCase.upperCase(str));
// console.log(upperCase.localeUpperCase(str,""));

const app = express()

app.get('/', (req, res)=> {
  res.send('Hello World get req response')

})

app.listen(3000,()=>{
    console.log('runing on port 3000');
})


app.get('/about', (req, res)=> {
    res.send('about get req response')
  
  })

  app.get('/contact', (req, res)=> {
    res.send('contact get req response')
  
  })
  
