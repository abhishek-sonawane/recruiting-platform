const Jobs = require("../models/Jobs")
const Applications = require("../models/Applications")


const findJobByID =async(id)=>{
    const job = await Jobs.findById(id)
    return job
}


// apply to job 
const postApplyToJob = async(payload)=>{
   try {
    const application = new Applications({
        name:payload.name,
        email:payload.email,
        job_id: payload.job_id,
        cvPDF:{
            path: payload.filepath
        }
    })
    await application.save()
   } catch (error) {
        console.log(`service :: postApplyToJob error message: ${error.message}`)
   }
}

module.exports ={findJobByID,postApplyToJob}