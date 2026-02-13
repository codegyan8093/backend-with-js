import { connect } from "mongoose";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
});




connectDB()
.then(()=>{
     
  app.on("port conection error",(err)=>{
    console.log("server error",err)
  })

    app.listen((process.env.PORT || 8000),()=>{
        console.log(`server is running on port ${process.env.PORT || 8000}  `)
})})
.catch((err)=>{
    console.log("mongo db connection failed",err)
})