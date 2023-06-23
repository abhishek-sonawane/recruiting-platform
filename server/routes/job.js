const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const auth = require('../middleware/authMiddleware')
const {getSingleJob,postJob, applyToJob} = require('../controllers/postController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./temp/uploads')
    },
    filename : (req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload  = multer({storage})


router.get('/:id',getSingleJob )
router.post('/post/post-job',auth,postJob)
router.post('/apply', upload.single('pdf'), applyToJob)

module.exports = router