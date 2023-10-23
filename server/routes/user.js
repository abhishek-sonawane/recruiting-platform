const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const auth = require('../middleware/authMiddleware')
const {getUserDetails, postLogoutUser} = require('../controllers/userController')



router.get('/user/:id', auth,getUserDetails)

router.post('/user/logout',auth,postLogoutUser)

router.post('/user/register',async(req,res)=>{
    try {
        const {username,password} = req.body
        console.log(username, password)
    if(username && password){
        console.log('working')
        const user = new Users({
            username,
           password
        })
        await user.save()
       return res.status(200).send('user saved successfully')
    }
   return res.status(403).send('please submit all the details')
    } catch (error) {
        console.log(error.message)
            res.status(403).send('something went wrong')
    }
})

module.exports = router