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
   origin:'http://localhost:8000', 
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
    // if(!username || !password){
    //    return res.status(403).json('please enter an email and password');
    // }

    const user = await Users.findOne({username:username})
    if(user){
        
        if(user.password!==password){
            console.log(user)
          return  res.status(403).send('wrong password')
        }

        console.log(user._id)
        const token =  generateToken(user.id)
 
        res.cookie('jwt',token,{
         httpOnly:true,
         secure :process.env.NODE_ENV!=='development',
         sameSite:'strict',
         maxAge: 30*24*60*60*1000,
     })
       return  res.status(200).json(`user logged in successfully`)  
        
    }
    else{
      return  res.status(404).json('user does not exist')
    }
})

// testing protected route with middleware
app.get('/user/me',auth,(req,res)=>{

    res.send('protected route')

})


app.get('/job/:id',async(req,res)=>{
      try {
        const job = await Jobs.findById(req.params.id)
        if(job){
            res.status(200).json(job)
        }else{
            res.send('hi')
        }
      } catch (error) {
        console.log(error)
        res.status(403).json('wrong id')
      }
})

