import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// app.get('/', (req, res) => {

// })

mongoose.connect(process.env.MONGO)
.then((req,res)=>{
    console.log('Connected to db');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, () => {
    console.log("Server is runing on port 3000");
})