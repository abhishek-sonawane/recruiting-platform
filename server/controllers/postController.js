// const Jobs = require('../models/Jobs')
const Jobs = require("../models/Jobs")



const getSingleJob = async (req, res) => {
    try {
        const job = await Jobs.findById(req.params.id)
        if (job) {
            res.status(200).json(job)
        } else {
            res.status(403).json('something went')
        }
    } catch (error) {
        console.log(error)
        res.status(403).json('wrong id')
    }
}

const postJob = async(req,res)=>{
    try { 
        const { title , description } = req.body
        const job = new Jobs({
            title,
            description
        })
        console.log(job)
        await job.save()
        res.status(200).send('job posted successfully')
    } catch (error) {
        console.error(`error:${error.message}`)
        res.status(403).json('something went wrong ')
    }
}

module.exports = {getSingleJob,postJob}


