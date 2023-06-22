const express = require('express')
const router = express.Router()
const loginUser = require('../controllers/loginController')



// login page 
router.post('/', loginUser)



module.exports = router