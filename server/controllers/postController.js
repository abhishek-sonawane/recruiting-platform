// const Jobs = require('../models/Jobs')
const Jobs = require("../models/Jobs")
const Applications = require("../models/Applications")


const getSingleJob = async (req, res) => {
    try {
        const job = await Jobs.findById(req.params.id)
        if (job) {
            res.status(200).json(job)
        } else {
            res.status(403).json('something went wrong')
        }
    } catch (error) {
        console.log(error)
        res.status(403).json('wrong id')
    }
}

const postJob = async(req,res)=>{
//     console.log(req.body)
//    const schema = PostJobSchema.safeParse(req.body)
//    console.log(schema)
//    if(schema.success){
    try { 
        const { title , description } = req.body;
        const job = new Jobs({
            title,
            description
        })
        console.log(job)
        await job.save()
       return res.status(200).json('job posted successfully')
    } catch (error) {
        console.error(`error:${error.message}`)
       return res.status(403).json('something went wrong ')
    }
//    }
//    else{
//     return res.json('something went wrong with zod')
//    }
}

const applyToJob = async(req,res)=>{
    try {
        const {name,email,job_id} = req.body
        const application = new Applications({
            job_id: job_id,
            name:name,
            email:email,
            cvPDF:{
                path: req.file.path
            }
        })
        await application.save()
        console.log(req.body)
        console.log(req.file)
       return res.status(200).json('application posted successfully')
    } catch (error) {
        console.log(error.message)
      return  res.status(403).json('something went wrong')
    }
}

const updateSingleJob =async(req,res)=>{
   try {
    console.log(req.params.id)
    console.log(req.body.value)
    const job =  await Jobs.findByIdAndUpdate(
       '648065b8374394ea522a182c',
    {   [req.body.property] : req.body.value}
        
      );
    if(!job){
        return res.status(403).json('job not found')
    }
    console.log(job)
   return res.status(200).json('job updated successfully')
   } catch (error) {
    console.log(error)
   return res.status(403).json('something went wrong')
   }
    
}


const getApplications = async(req,res)=>{
    try {
        const jobApplications = await Applications.find()
        console.log(jobApplications)
        return res.json(jobApplications)
    } catch (error) {
        console.log(error)
        return res.status(403).send('something went wrong ')
    }
}


module.exports = {getSingleJob,postJob,applyToJob,getApplications,updateSingleJob}


