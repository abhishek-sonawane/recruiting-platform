const mongoose = require('mongoose')

 const connectDB = async()=>{
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/job-board')
        console.log('connected to mongoDB database')
        
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}


module.exports = connectDB