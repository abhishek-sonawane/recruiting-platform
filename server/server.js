const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const index = require('./routes/index.js')
const job = require('./routes/job')
const Auth = require('./routes/Auth')
const user = require('./routes/user')
const path = require('path')
const auth = require('./middleware/authMiddleware')

const corsOptions = {
    origin: [process.env.CLIENT_DOMAIN_URL, 'http://localhost:8000','http://192.168.0.140:8000'],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


connectDB();
app.listen(port, () => {
    console.log(`server started on port : ${port}`)
})


app.use(cors(corsOptions))
app.use(cookieParser())


// to parse formdata
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



// homepage route 
app.use('/',index)
app.use('/job',job)
app.use('/auth',Auth)
app.use('/user',user)
app.use('/file',express.static(path.join(__dirname,'temp/uploads')))

// app.get('/', async (req, res) => {
//     try {
//         const jobsFromDB = await Jobs.find()
//         // let jobsFromDB ='hi'
//         console.log(jobsFromDB)
//         res.json(jobsFromDB)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'An error occurred while fetching jobs' });
//     }
// })



// login page 
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body
//     const user = await Users.findOne({ username: username })
    
//     if (user) {
//         if (user.password !== password) {
//             console.log(user)
//             return res.status(403).send('wrong password')
//         }

//         console.log(user._id)
//         const token = generateToken(user.id)

//         res.cookie('jwt', token, {
//             httpOnly: false,
//             secure: process.env.NODE_ENV !== 'development',
//             sameSite: 'strict',
//             maxAge: 30 * 24 * 60 * 60 * 1000,
//         })
//         return res.status(200).json(`user logged in successfully`)

//     }
//     else {
//         return res.status(404).json('user does not exist')
//     }
// })

// testing protected route with middleware
// app.get('/user/me', auth, (req, res) => {

//     res.send('protected route')

// })


// app.get('/job/:id', async (req, res) => {
//     try {
//         const job = await Jobs.findById(req.params.id)
//         if (job) {
//             res.status(200).json(job)
//         } else {
//             res.status(403).json('something went')
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(403).json('wrong id')
//     }
// })



// app.post('/job/post/post-job',auth,async(req,res)=>{
//     try { 
//         const { title , description } = req.body
//         const job = new Jobs({
//             title,
//             description
//         })
//         console.log(job)
//         await job.save()
//         res.status(200).send('job posted successfully')
//     } catch (error) {
//         console.error(`error:${error.message}`)
//         res.status(403).json('something went wrong ')
//     }
// })

