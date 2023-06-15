const jwt = require('jsonwebtoken')

const generateToken = (userID)=>{
     return jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:'80d'
    })
 
}


module.exports = generateToken