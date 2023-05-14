const { log } = require('console');
const { json } = require('express');
const http = require('http')

const mobile = {name:"OnePlus ", model:" Oneplus 9Pro " ,price:" 45000 "}

const server = http.createServer((req, res) => {
    // res.write(`Mobile Details => Manufictured By > ${mobile.name} Model Is ${mobile.model} Price Is = ${mobile.price}`)
    res.write(JSON.stringify(mobile ))
    res.end(`
    ' The Respons End from server '`);
    console.log(req);
    console.log(res   );


});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is Running , listening to port 8000 ');
});