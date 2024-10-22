const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongoDB database Db host: ${connectionInstance.connection.host}\n`)
    } catch (error) {
        console.error(error)
        logger.error("MongoDB connection error: ", error);
        process.exit(1);
    }
}

module.exports = connectDB