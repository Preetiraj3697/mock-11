const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    bio:{type:String},
    phone:{type:Number},
    profile_pic:{type:String},
    email : {type: String, required: true},
    password : {type: String, required: true}, 
})

const UserModel = mongoose.model("usermock11", userSchema)

module.exports = { UserModel }