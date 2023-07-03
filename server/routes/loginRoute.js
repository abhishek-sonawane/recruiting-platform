const express = require('express')
const router = express.Router()
const loginUser = require('../controllers/loginController')
const validationMiddleware = require('../middleware/schemaMiddleware')
const LoginSchema = require('./login.schema')



// login page 
router.post('/',validationMiddleware(LoginSchema) ,loginUser)



module.exports = router