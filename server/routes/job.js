const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const auth = require('../middleware/authMiddleware')
const {getSingleJob,postJob} = require('../controllers/postController')


router.get('/:id',getSingleJob )
router.post('/post/post-job',auth,postJob)


module.exports = router