const Users = require("../models/Users")

const findUserByProperty =async(property)=>{
    const user = await Users.findOne({username:property})
    return user
}


module.exports = {findUserByProperty}