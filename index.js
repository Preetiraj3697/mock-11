const express=require("express");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const app = express();
const {connection}=require("./config/db")
require("dotenv").config()
app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Preeti Raj")
})
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