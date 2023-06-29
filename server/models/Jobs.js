const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    title:String,
    description:String,
    owner_id: {type:mongoose.Types.ObjectId,ref:'users'}
})


module.exports = mongoose.model('jobs',JobsSchema)



