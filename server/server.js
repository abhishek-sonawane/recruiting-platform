const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const connectionURI = 'mongodb://127.0.0.1:27017/job-board' 
const cors=require("cors");
const Jobs = require('./models/Jobs')
const Users = require('./models/Users')

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// to parse formdata
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.connect(connectionURI).then(()=>{
    console.log('connected to database')
    
    app.listen(port,()=>{
        console.log('server started on port 3000')
    })

})


// homepage route 
app.get('/',async(req,res)=>{
    const user = await Jobs.find()
    res.json(user)
})



// login page 
app.post('/login',async(req,res)=>{
    const {username, password} = req.body
    const user = await Users.findOne({username:username})
    if(!user){
        res.status(404).send('user does not exist')
    }
    if(user.password!=password){
        console.log(user)
        res.status(403).send('wrong password')
    }else{
        res.send(`user logged in successfully`)  

        
    }
})


