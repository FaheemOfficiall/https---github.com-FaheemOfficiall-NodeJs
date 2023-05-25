
import mongoose from 'mongoose'
const DATA_BASE_URI = process.env.DATA_BASE_URI || 'mongodb://0.0.0.0:27017/';
const dbName='adduser'


let db=async(DATA_BASE_URI,dbName)=>{
     await mongoose.connect(DATA_BASE_URI+dbName)
    console.log('database connected')
}

db(DATA_BASE_URI,dbName);

const addUserSchema= mongoose.Schema({
    first:String,
    lastName:String,
    mobileNumber:Number,
    email:String,
    password:String
})

const addUSerModel=mongoose.model('addUser',addUserSchema);





export default addUSerModel;