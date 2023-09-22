const Users = require("../models/Users")
const { findUserByProperty } = require("../services/userService")
const generateToken = require("../utils/generateToken")

const loginUser = async (req, res) => {
    const { username, password } = req.body
    const user = await findUserByProperty(username)
    
  try {
    if (user) {
        if (user.password !== password) {
            console.log(user)
            return res.status(403).send('wrong password')
        }

        console.log(user._id)
        const token = generateToken(user.id)

        // res.cookie('jwt', token, {
        //     httpOnly: false,
        //     secure: process.env.NODE_ENV !== 'development',
        //     sameSite: 'strict',
        //     maxAge: 30 * 24 * 60 * 60 * 1000,
        // })
        return res.status(200).json({userId:user._id,token:token,message:'user loggedIn successfully'})

    }
    else {
        return res.status(404).json('user does not exist')
    }
  } catch (error) {
    console.log(error)
    res.status(404).json('Login Error: something went wrong')
  }
}

module.exports = loginUser