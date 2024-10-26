const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // eslint-disable-next-line no-undef
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongoDB database Db host: ${connectionInstance.connection.host}\n`)
    } catch (error) {
        console.error(error)
        // eslint-disable-next-line no-undef
        logger.error("MongoDB connection error: ", error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

module.exports = connectDB