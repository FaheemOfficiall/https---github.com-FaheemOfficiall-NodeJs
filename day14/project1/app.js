import express from 'express'
import bodyParser from 'body-parser'
import  { join } from "path"


const app = express();
const port = 3000;

app.use(express.static("./public/images"))
app.use(express.static("./public"))



console.log();

app.get("/home", (req, res) => {
    res.sendFile(join(process.cwd(), "dashboard.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(join(process.cwd(), "login.html"))
})

app.post("/login", (req, res) => {
    
    if (req.body.username == "faheem" && req.body.password == "khan") {
        res.sendFile(join(process.cwd(), "succes.html"))
    

    } else {
        res.sendFile(join(process.cwd(),"invalidLogin.html"))
    }
})

app.listen(port, () => {
    console.log('server is running on port' + port)
});