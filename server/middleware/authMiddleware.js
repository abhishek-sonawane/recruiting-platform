const jwt = require('jsonwebtoken')
const Users = require('../models/Users')

const auth = async (req, res, next) => {
    try {
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
        console.log(decoded)
        req.user = await Users.findById(decoded.userID)
        next()


    } catch (error) {
        console.log(error)
        res.status(401).json('not authorized ')
        // throw new Error('not authorized')
    }

}

module.exports = auth 