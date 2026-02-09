import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';




const connectDB=async()=>{
    try{
       const DBconnectionInstance= await mongoose.connect(`${process.env.MPONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected successfully !!DB HOST: ${DBconnectionInstance.connection.host} \n`)
        
    }
    catch(error){
        console.error(`\n mongodb connection failed !! ${error.message} \n`)
         process.exit(1)
    }
}

export default connectDB;
