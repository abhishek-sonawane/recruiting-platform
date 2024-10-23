const jwt = require('jsonwebtoken')
const Users = require('../models/Users')

const auth = async (req, res, next) => {
    try {
        console.log('request headers,', req?.headers)
        const token = req?.headers?.authorization.split(' ')[1]
        console.log(token)
        // eslint-disable-next-line no-undef
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(`line from auth middleware :${JSON.stringify(decoded)}`)
        const user = await Users.findById(decoded.userID)
        console.log(user)
        next()


    } catch (error) {
        console.log(error, 'errror from auth middleware =====>')
        res.status(401).json('not authorized ')
        // throw new Error('not authorized')
    }

}

module.exports = auth 