require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const {userRouter}= require('./routes/user.routes')
const {profileRouter}=require('./routes/Profile.routes')
const {authenticate}= require('./middlewares/authentication')


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Preeti Raj");
})

app.use('/user', userRouter)
// app.use(authenticate)
app.use('/', profileRouter)
app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)

    }
    console.log(`server running at ${process.env.PORT}`)
})