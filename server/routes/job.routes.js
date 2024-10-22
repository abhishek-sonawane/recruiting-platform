const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const auth = require('../middleware/authMiddleware')
const {getSingleJob,postJob, applyToJob, updateSingleJob, deleteSingleJob, editApplicationStatus} = require('../controllers/jobController')
const upload =  require('../middleware/multerMiddleware')
const validationMiddleware = require('../middleware/schemaMiddleware')
const JobSchema = require('../schema/job.schema')
const ApplicationSchema = require('../schema/application.schema')



router.get('/:id',getSingleJob )
router.post('/post/post-job', validationMiddleware(JobSchema),auth,postJob)
router.post('/apply', upload.single('pdf'),validationMiddleware(ApplicationSchema), applyToJob)
router.post('/apply/edit',auth, editApplicationStatus)
router.post('/update/:id',auth,updateSingleJob)
router.post('/delete/:id',auth,deleteSingleJob)

module.exports = router