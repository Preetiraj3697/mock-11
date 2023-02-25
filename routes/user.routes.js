const express = require('express')
const userRouter = express.Router()
const {UserModel}= require('../model/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

userRouter.post('/register', async (req, res) => {
    const {pic, name, bio, phone, email, password} = req.body;
    console.log(req.body);
    try {
        bcrypt.hash(password, 5 , async(err, hash)=>{
      if(err)
      {
          console.log(err);
          res.send("Error while hashing")
      }else{
          const user = new UserModel({pic, name, bio, phone, email, password:hash});
          await user.save();
          res.send("Registration successfull")
      }
  })
} catch (error) {
    console.log(error);
    res.send("Error in registration. Please Registed Again")
}
})


userRouter.post('/login', async(req,res)=>{
    let {email, password} = req.body;
    try {
        const user=await UserModel.find({email})
        if(user.length>0)
        {
            bcrypt.compare(password, user[0].password,(err, result)=>{
                if(result)
                {
                    const token = jwt.sign({userID:user[0]._id},"Authentication")
                    res.send({"msg":"Login successful",token})
                }else{
                    res.send("Wrong Credential",err)
                    
                }
            })
        }else{
            res.send("Wrong Credential. Please Try Again")
        }
        
    } catch (error) {
        console.log("Error in Login")
        res.send(error)
    }
})



module.exports={
    userRouter
}
