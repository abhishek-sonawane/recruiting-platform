const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    job_id:String,
    name: String,
    email:String,
    cvPDF : {
        path:String
    },
    status: {
        type: String,
        enum: ['applied', 'resume_viewed', 'scheduled_for_interview', 'rejected'],
        default: 'applied' // You can set a default status if needed
    }
},   {timestamps:true})


module.exports = mongoose.model('Applications',ApplicationSchema)



