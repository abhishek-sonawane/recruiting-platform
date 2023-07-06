const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const {getUserDetails, postLogoutUser} = require('../controllers/userController')



router.get('/user/me', auth,getUserDetails)

router.post('/user/logout',auth,postLogoutUser)

module.exports = router