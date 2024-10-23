require('dotenv').config();
const app = require('./app')
const connectDB = require('./config/db')


const startServer = () => {
  // eslint-disable-next-line no-undef
  app.listen(process.env.PORT || 8080, () => {
    // eslint-disable-next-line no-undef
    console.log(`server started on port : ${process.env.PORT || 8080}`)
  })
}

try {
  connectDB();  // Connect to the database
  startServer();      // Start the server after a successful connection
} catch (error) {
  // eslint-disable-next-line no-undef
  logger.error("Error starting the server: ", error);  // Handle connection error
}