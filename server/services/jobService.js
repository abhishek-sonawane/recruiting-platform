const Jobs = require("../models/Jobs")
const Applications = require("../models/Applications")
const nodemailer = require('nodemailer')


const getAllJobs = async () => {
    return await Jobs.find();
};

const findJobByID = async (id) => {
    const job = await Jobs.findById(id)
    return job
}

// apply to job 
const postApplyToJob = async (payload) => {
    try {
        const application = new Applications({
            name: payload.name,
            email: payload.email,
            job_id: payload.job_id,
            cvPDF: {
                path: payload.filepath
            }
        })
        await application.save()
        const appliedJob = await findJobByID(payload.job_id)

        const info = await sendEmail(payload.email, "Application submitted to iconnect", `
        <b>Your Application for ${appliedJob.title} has been submitted</b>
        <br/> <p>If your profile matches the requirements, we will get in touch with you shortly.</p>
    `);

        console.log("Message sent: %s", info.messageId);

    } catch (error) {
        console.log(`service :: postApplyToJob error message: ${error.message}`)
    }
}

const createNewJob = async () => {
    const job = new Jobs({
        title,
        description,
        experience,
        job_type
    })
    console.log(job)
    await job.save()
    return job;
}

const updateJob = async ({ id, title, description }) => {
    const updatedJob = await Jobs.findByIdAndUpdate(
        id,
        {
            title,
            description
        }
    );
    return updatedJob
}

const deleteJob = async (id) => {
    const deletedjob = await Jobs.findByIdAndDelete(id)
    return deletedjob
}

module.exports = { findJobByID, postApplyToJob, getAllJobs, createNewJob, updateJob, deleteJob }