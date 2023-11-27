import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

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

// const { username, email, password } = req.body;

// const newUser = new User({ username, email, password })

// await newUser.save()
// res.status(201).json("user succefully created")