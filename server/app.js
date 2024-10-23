const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
const cookieParser = require('cookie-parser')
const index = require('./routes/index.routes.js')
const job = require('./routes/job.routes.js')
const Auth = require('./routes/auth.routes.js')
const user = require('./routes/user.routes.js')
const path = require('path')
const auth = require('./middleware/authMiddleware')


const corsOptions = {
    origin: [process.env.CLIENT_DOMAIN_URL, 'http://localhost:8000', 'http://192.168.0.140:8000'],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(cookieParser())

// to parse formdata
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// homepage route 
app.use('/', index)
app.use('/job', job)
app.use('/auth', Auth)
app.use('/user', user)
app.use('/file', express.static(path.join(__dirname, 'temp/uploads')))


module.exports = app