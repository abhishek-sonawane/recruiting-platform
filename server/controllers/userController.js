const { findUserById } = require("../services/userService")


const getUserDetails = async (req, res) => {
    console.log('adhasjdsahdajkd', req.params.id)
    const user = await findUserById(req.params.id)
    res.json(user)
}

const postLogoutUser = (req, res) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: false,
            // secure: process.env.NODE_ENV !== 'development',
            // sameSite: 'strict',
            expires: new Date(0),
        })
        res.status(200).json('user logged out successful')
    } catch (error) {
        console.log(error.message)
        res.json(`logout error: ${error.message}`)
    }
}

module.exports = { getUserDetails, postLogoutUser }