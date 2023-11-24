import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'

dotenv.config()


const app = express()


app.use('/api/user', userRouter)

mongoose.connect(process.env.MONGO)
    .then((req, res) => {
        console.log('Connected to db');
    })
    .catch((err) => {
        console.log(err);
    })

    
app.listen(3000, () => {
    console.log("Server is runing on port 3000");
})