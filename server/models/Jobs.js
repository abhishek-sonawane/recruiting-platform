const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    title: String,
    description: String,
    owner_id: { type: mongoose.Types.ObjectId, ref: 'users' },
    job_type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'internship'],
        default: 'Full-time'
    },
    experience: String
}, { timestamps: true })


module.exports = mongoose.model('jobs', JobsSchema)



