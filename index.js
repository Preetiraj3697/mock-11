require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const user = require("./routes/user.route");
const { authentication } = require("./middlewares/authentication");
const app = express();
app.get("/",(req,res)=>{
    res.send("Preeti Raj")
})
app.use(express.json());
app.use(cors());
app.use("/api", user);
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