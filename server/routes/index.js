const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const index = require('../controllers/index')


router.get('/', index )


module.exports = router
