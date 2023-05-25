import express from 'express'
import connectdb from './connection/connection.js'
import './model/schema.js';
import { studentModel, getAllData } from './model/schema.js';
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000
const DATA_BASE_URI = process.env.DATA_BASE_URI || 'mongodb://0.0.0.0:27017/schooldb';
// const DB_OPTION='schooldb';


connectdb(DATA_BASE_URI)

getAllData(studentModel)

app.get('/', (req, res) => {

})


// axios.get("http://localhost:3000/").then((data)=>{
//      console.log(data)
// })

app.listen(port, () => { console.log("server Started on port" + port) });