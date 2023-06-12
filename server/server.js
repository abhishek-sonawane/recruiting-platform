const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors=require("cors");
const Jobs = require('./models/Jobs')
const Users = require('./models/Users')
const generateToken = require('./utils/generateToken')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(cookieParser())

// middleware 

const auth = async(req,res,next)=>{
    try {
        const decoded = jwt.verify(req.cookies.jwt,process.env.JWT_SECRET)
        console.log(decoded)
        req.user = await Users.findById(decoded.userID)
        next()


    } catch (error) {
        res.status(401).json('not authorized ')
        // throw new Error('not authorized')
    }
    

}

// to parse formdata
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to database')
    
    app.listen(port,()=>{
        console.log('server started on port 3000')
    })

})


// homepage route 
app.get('/',async(req,res)=>{
    const jobsFromDB = await Jobs.find()
    res.json(jobsFromDB)
})



// login page 
app.post('/login',async(req,res)=>{
    const {username, password} = req.body
    const user = await Users.findOne({username:username})
    if(!user){
        res.status(404).send('user does not exist')
    }
    if(user.password!==password){
        console.log(user)
        res.status(403).send('wrong password')
    }else{
        console.log(user._id)
        generateToken(res,user.id)
        res.status(200).json(`user logged in successfully`)  

        
    }
})

// testing protected route with middleware
app.get('/user/me',auth,(req,res)=>{

    res.send('protected route')

})


