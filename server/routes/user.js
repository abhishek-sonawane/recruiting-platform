const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const getUserDetails = require('../controllers/userController')



router.get('/user/me', auth,getUserDetails)



module.exports = router