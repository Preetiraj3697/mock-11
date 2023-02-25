const jwt = require('jsonwebtoken')

const authenticate=(req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        const decoded=jwt.verify(token,"Authentication")
        if(decoded)
        {
            const userID=decoded.userID;
            req.body.userID=userID;
           next();
        }else{
            res.send("Please Login First");
    }
    }else{
        res.send("Please Try Again");
    }
}


module.exports ={
    authenticate
}