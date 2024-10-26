const express = require('express')
const router = express.Router()
const { getApplications, getAllJobs } = require('../controllers/jobController')
const auth = require('../middleware/authMiddleware')


router.get('/', getAllJobs)
router.get('/recruiter/applications', auth, getApplications)
// protected route
router.get('/recr/test', auth, (req, res) => {
        res.send(req.headers.authorization)
})
// router.get('/file',express.static(path.join(__dirname,'temp/uploads')))

module.exports = router
