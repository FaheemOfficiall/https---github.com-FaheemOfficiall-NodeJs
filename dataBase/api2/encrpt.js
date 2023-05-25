import bycrypt from 'bcrypt'
let password="faheem@786"
bycrypt.hash(password,10,(err,hash)=>{
    if (hash) {
        console.log("hash Generated"+hash);
    }else{
        console.log('Hash Not genereated'+err);
    }

})