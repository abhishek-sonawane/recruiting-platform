// const Jobs = require('../models/Jobs')
const Applications = require("../models/Applications")
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

const applyToJob = async(req,res)=>{
    try {
        const {name,email} = req.body
        const application = new Applications({
            name:name,
            email:email,
            cvPDF:{
                path: req.file.path
            }
        })
        await application.save()
        console.log(req.body)
        console.log(req.file)
       return res.status(200).send('application posted successfully')
    } catch (error) {
        console.log(error.message)
      return  res.status(403).json('something went wrong')
    }
}

module.exports = {getSingleJob,postJob,applyToJob}


