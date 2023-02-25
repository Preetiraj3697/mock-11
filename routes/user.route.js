const express= require("express");
const { register, login, getProfile } = require("../controller/user.controller");
const { authentication } = require("../middlewares/authentication");
const router= express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/getprofile").get(getProfile)

module.exports=router