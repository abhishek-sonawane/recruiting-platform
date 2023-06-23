const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    name: String,
    email:String,
    cvPDF : {
        path:String
    }
},   {timestamps:true})


module.exports = mongoose.model('Applications',ApplicationSchema)



