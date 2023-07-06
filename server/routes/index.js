const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const index = require('../controllers/index')
const { getApplications } = require('../controllers/jobController')
const auth = require('../middleware/authMiddleware')
const path = require('path')


router.get('/', index )
router.get('/recruiter/applications',auth,getApplications)
// router.get('/file',express.static(path.join(__dirname,'temp/uploads')))

module.exports = router
