const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const auth = require('../middleware/authMiddleware')
const { getUserDetails, postLogoutUser } = require('../controllers/userController')



router.get('/user/:id', auth, getUserDetails)

router.post('/user/logout', auth, postLogoutUser)


module.exports = router