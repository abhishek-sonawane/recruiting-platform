const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    job_id:String,
    name: String,
    email:String,
    cvPDF : {
        path:String
    }
},   {timestamps:true})


module.exports = mongoose.model('Applications',ApplicationSchema)



