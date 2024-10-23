const express = require('express')
const router = express.Router()
// const loginUser = require('../controllers/AuthController')
const validationMiddleware = require('../middleware/schemaMiddleware')
const LoginSchema = require('../schema/login.schema')
const { registerUser, loginUser } = require('../controllers/AuthController')


router.post('/login', validationMiddleware(LoginSchema), loginUser)

router.post('/register', registerUser)

module.exports = router