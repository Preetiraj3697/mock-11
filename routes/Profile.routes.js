const express = require('express')
const profileRouter = express.Router()
const {UserModel}= require('../model/User.model')
profileRouter.get("/getProfile", async (req, res) => {
  console.log(req.body);
    let userId = req.body.userId;
    try {
      const user = await UserModel.findOne({ _id: userId });
      res.send(user);
    } catch (err) {
      res.send("Something went wrong");
      console.log(err);
    }
  });

  profileRouter.patch("/editProfile", async (req, res) => {
    let userId = req.body.userId;
    let payload = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(
        { _id: userId },
        { ...payload }
      );
      res.send(user);
    } catch (err) {
      res.send("Something went wrong");
      console.log(err);
    }
  });

  module.exports={
    profileRouter
}