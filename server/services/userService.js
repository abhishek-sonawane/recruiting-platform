const Users = require("../models/Users")

const findUserByProperty =async(property)=>{
    const user = await Users.findOne({username:property})
    return user
}

const findUserById = async(id)=>{
    try {
        const user = await Users.findById(id)
        return user
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {findUserByProperty,findUserById}