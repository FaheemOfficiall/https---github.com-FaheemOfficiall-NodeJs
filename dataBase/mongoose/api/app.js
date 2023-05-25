// import dotenv from 'dotenv'
// dotenv.config();
import bodyParser from 'body-parser';
import express from 'express'
import addUSerModel from './model/addSchema.js';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));


app.set('views', "./views")
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('index')

});
let userSave=async(url)=>{
    try {
        let add=  new addUSerModel(url);
        await add.save();
    } catch (error) {
        console.log(error)
    }
  
  }
app.post('/adduser', (req, res) => {

userSave(req.body)  

    res.send('user addes succesfully')

});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})