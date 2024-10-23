require('dotenv').config();
const app = require('./app')
const connectDB = require('./config/db')


const startServer = () => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`server started on port : ${process.env.PORT || 8080}`)
  })
}

try {
  connectDB();  // Connect to the database
  startServer();      // Start the server after a successful connection
} catch (error) {
  logger.error("Error starting the server: ", error);  // Handle connection error
}