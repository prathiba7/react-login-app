const express=require('express')
const app=express()

const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routesUrls=require('./routes/routes')
const cors=require('cors')
dotenv.config()


mongoose.connect(process.env.DATABASE_ACESS,()=>console.log("db connected succesfully"))

app.use(express.json())
app.use(cors())
app.use('/user',routesUrls)
app.listen(3000,()=> console.log("server is running"))