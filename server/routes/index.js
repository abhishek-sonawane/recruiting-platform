const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const index = require('../controllers/index')
const { getApplications } = require('../controllers/jobController')
const auth = require('../middleware/authMiddleware')


router.get('/', index )
router.get('/recruiter/applications',getApplications)

module.exports = router
