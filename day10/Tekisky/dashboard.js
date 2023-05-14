const express = require('express')
const {server}=require('./app.js')

const app = express();
let port = 3000;




const dashboard=()=>{
    const get = app.get('*dashboard', (req, res) => {
        res.send('<h1>get Dashboard<h1/>');
    })
     
    const post = app.post('*dashboard', (req, res) => {
        res.send('<h1>post dashboard</h1>');
    })
    
    const put= app.put('*dashboard', (req, res) => {
        res.send('<h1>put dashBoard<h1/>');
    })
    
    const patch = app.patch('*dashboard', (req, res) => {
        res.send('<h1>patch dashboard<h1/>');
    })
    
    const delet = app.delete('*dashboard', (req, res) => {
        res.send('<h1>delete dashboard<h1/>');
    })
}

 dashboard.listen(port, () => {
    console.log('server is running on port ' + port);
})

module.exports={dashboard}