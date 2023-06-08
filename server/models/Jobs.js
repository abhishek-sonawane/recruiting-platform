const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    title:String,
    description:String
})


module.exports = mongoose.model('jobs',JobsSchema)



