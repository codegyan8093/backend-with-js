import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()

app.use(cors({
    origin:process.env.CORE_ORIGIN,
    credentials:true
}

))
app.use(express.json({limit:'10kb'}))//taking json data from request body and parsing it to js object
app.use(express.urlencoded({extended:true}))//taking data from urlencoded
app.use(express.static("public"))//serving static files from public folder

app.use(cookieParser())//parsing cookies from request headers















export {app} 

