//import mongoose 

import mongoose from 'mongoose'

const Connect = async () =>{
    
    try{
        await mongoose.connect(process.env.URI || '',{})
        console.log("Connect to MongoDB")
    }catch(err){
        console.log(err)
    }
}


export default Connect