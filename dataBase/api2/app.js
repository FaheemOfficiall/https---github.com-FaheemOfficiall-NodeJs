// import dotenv from 'dotenv'
// dotenv.config();
import bodyParser from 'body-parser';
import express from 'express'
import addUSerModel from './model/addSchema.js';
import bycrpt from 'bcrypt'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));


app.set('views', "./views")
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('index')

});
let userSave=async(first,lastName,mobileNumber,email,password)=>{
    try {
       
        let add=  new addUSerModel({first,lastName,mobileNumber,email,password});
        console.log(add);
        await add.save();

    } catch (error) {
        console.log(error)
    }
  
  }
app.post('/adduser', (req, res) => {
console.log(req.body);
    let {first,lastName,mobileNumber,email,password}=req.body;
     bycrpt.hash(password,10,(err,hash)=>{
        userSave(first,lastName,mobileNumber,email,hash)
        
        
    })

    res.send('user addes succesfully')

});



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})