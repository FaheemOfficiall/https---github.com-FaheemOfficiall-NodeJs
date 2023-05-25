import express from 'express';
import mongoose from 'mongoose';

const app = express()
const port = process.env.PORT || 3000;
const DATA_BASE_URI = process.env.DATA_BASE_URI || 'mongodb://0.0.0.0:27017/';

const dbName = "SoftCadia"




mongoose.connect(DATA_BASE_URI + dbName);
const db = mongoose.connection;
db.once('open', () => { console.log('open') })
db.on('error', console.error.bind(console, 'connection error:'));

const mobileSchema = mongoose.Schema({
    company: String,
    model: { type: String, required: true },
    memory: { type: String, required: true },
    price: { type: Number, required: true, min: 8000, max: 10000 }
});

const mobileMoodel = mongoose.model('mobil', mobileSchema, "mobiles")

const redmi = new mobileMoodel({
    company: "Redmi",
    model: "note10",
    memory: "8GB",
    price: 8000
});
const oneplus = new mobileMoodel({
    company: "oneplus",
    model: "9pr0",
    memory: "8GB",
    price: 8000
});

const realme = new mobileMoodel({
    company: "realme",
    model: "9pr0",
    memory: "8GB",
    price: 8000
});

const asus = new mobileMoodel({
    company: "asus",
    model: "9pr0",
    memory: "8GB",
    price: 8000
});

const hp = new mobileMoodel({
    company: "hp",
    model: "9pr0",
    memory: "8GB",
    price: 8000
});

let allModel = [redmi, oneplus, realme, asus, hp]

// mobileMoodel.insertMany(allModel);

// redmi.save();
// oneplus.save();

mobileMoodel.findOneAndUpdate({_id:'646c629fe77c42567070fe60'},{price:1230},{new:true}).then((data)=>{
    // console.log(data);

})

mobileMoodel.find({price:1330,model:"note10"}).then((data)=>{
    // console.log('upadated data'+data);
});



// mobileMoodel.deleteMany({model:"9pr0"}).then((data)=>{
//     console.log(data);
// });
mobileMoodel.findByIdAndRemove({_id:"646c699da5683eb90f6ad6e8"}).then(()=>{
    console.log('deleted');
})



app.listen(port, () => {
    console.log("server Started on port" + port)
});