const jwt = require('jsonwebtoken')

const generateToken = (res,userID)=>{
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:'80d'
    })

    res.cookie('jwt',token,{
        httpOnly:true,
        secure :false,
        sameSite:'strict',
        maxAge: 30*30*60*30
    })
}


module.exports = generateToken