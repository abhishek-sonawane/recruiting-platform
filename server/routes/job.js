const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const auth = require('../middleware/authMiddleware')
const {getSingleJob,postJob, applyToJob, updateSingleJob} = require('../controllers/postController')
const multer = require('multer')
const validationMiddleware = require('../middleware/schemaMiddleware')
const JobSchema = require('./job.schema')
const ApplicationSchema = require('./application.schema')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./temp/uploads')
    },
    fileFilter: (req,file,cb)=>{
        console.log(file)
        cb(null,true)
    }
    ,
    filename : (req,file,cb)=>{
        console.log(`this is file from server :${file}`)
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload  = multer({storage})


router.get('/:id',getSingleJob )
router.post('/post/post-job', validationMiddleware(JobSchema),postJob)
router.post('/apply', upload.single('pdf'),validationMiddleware(ApplicationSchema), applyToJob)
router.post('/update/:id',updateSingleJob)

module.exports = router