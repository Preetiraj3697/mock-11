const jwt = require("jsonwebtoken")
require("dotenv").config()

const authentication = (req, res, next) => {
    const token = req.headers?.authorization
    console.log(token)
    if(!token) {
        res.send("please login")
    }
    
    const decoded = jwt.verify(token, "PreetiRaj");
    const user_id = decoded.user_id
    if(decoded) {
        req.body.user_id = user_id
        next()
    }
    else {
        res.send("please login")
    }
}

module.exports = { authentication }