const jwt = require('jsonwebtoken')

const generateToken = (userID) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn: '80d'
    })

}


module.exports = generateToken