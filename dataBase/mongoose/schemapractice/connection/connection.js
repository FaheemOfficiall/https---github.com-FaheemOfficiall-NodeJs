import mongoose from 'mongoose'

// const connectdb = mongoose.connect(DATA_BASE_URI).then(()=>{
//     console.log('Conectado com sucesso')
// }).catch(()=>{
//     console.log('Erro ao conectar com o banco de dados')
// })

const connectdb=async (DATA_BASE_URI,)=>{
    try{
        await mongoose.connect(DATA_BASE_URI)
        console.log('DB Connected')
    }catch (err){
        console.log(err)
    }
}


 export default connectdb