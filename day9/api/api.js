const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("req Recieved And Processed SuccesFully")
})
app.get('/about', (req, res) => {
    res.send("req Recieved from about And Processed SuccesFully")
})

app.get('/contact', (req, res) => {
    res.send("req Recieved from contact And Processed SuccesFully")
})

app.get('/search', (req, res) => {
    res.send("req Recieved from search And Processed SuccesFully")
})

app.get('../', (req, res) => {
    res.send("req Recieved from search And Processed SuccesFully")
})

app.post('/postRequest', (req, res) => {
    res.send('Got a POST request')
  })

app.listen(3000, () => {
    console.log("server run on port no 3000");
});

