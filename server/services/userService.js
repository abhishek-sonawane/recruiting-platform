const Users = require("../models/Users")

const findUserByProperty = async (property) => {
    const user = await Users.findOne({ username: property })
    return user
}

const findUserById = async (id) => {
    try {
        const user = await Users.findById(id)
        return user
    } catch (error) {
        console.log(error.message)
    }
}

const createNewUser = async (username, password) => {
    const user = new Users({
        username,
        password
    })
    await user.save()
    // return user
    const userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


module.exports = { findUserByProperty, findUserById, createNewUser }