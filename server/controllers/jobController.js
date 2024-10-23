const jobService = require('../services/jobService')
const applicationService = require('../services/applicationService')



const getAllJobs = async (req, res) => {
    try {
        const jobsFromDB = await jobService.getAllJobs()
        // let jobsFromDB ='hi'
        console.log(jobsFromDB)
        res.json(jobsFromDB)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching jobs' });
    }
}

const getSingleJob = async (req, res) => {
    try {
        const job = await jobService.findJobByID(req.params.id)
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

const postJob = async (req, res) => {
    try {
        const { title, description, experience, job_type } = req.body;
        if (title && experience && job_type) {
            const job = jobService.createNewJob({
                title,
                description,
                experience,
                job_type
            })
            return res.status(200).json({ message: 'job posted successfully', job })
        } else {
            return res.status(403).json('Please fill all details')
        }
    } catch (error) {
        console.error(`error:${error.message}`)
        return res.status(403).json('something went wrong ')
    }
}

const applyToJob = async (req, res) => {
    try {
        const { name, email, job_id } = req.body
        await jobService.postApplyToJob({ name: name, email: email, job_id: job_id, filepath: req.file.path })
        // console.log(req.body)
        // console.log(req.file)
        return res.status(200).json('application posted successfully')
    } catch (error) {
        console.log(error.message)
        return res.status(403).json(`ApplytoJob error:${error.message} `)
    }
}

const updateSingleJob = async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(`Data from updateSingleJob ${JSON.stringify(req.body)}`)
        const job = await jobService.updateJob({ id: req.params.id, title: req.body.title, description: req.body.description })
        if (!job) {
            return res.status(403).json('job not found')
        }
        console.log(job)
        return res.status(200).json('job updated successfully')
    } catch (error) {
        console.log(error)
        return res.status(403).json('something went wrong')
    }

}

const deleteSingleJob = async (req, res) => {
    try {
        console.log('reached delete job controller')
        const job = await jobService.deleteJob(req.params.id)
        if (!job) {
            return res.status(403).json('couldnt find the job')
        }
        console.log(job)
        return res.status(200).json('job delete successfully')
    } catch (error) {
        return res.status(403).json('couldnt delete job', error)
    }
}


const getApplications = async (req, res) => {
    try {
        const jobApplications = await applicationService.findAllApplications()
        console.log(jobApplications)
        return res.json(jobApplications)
    } catch (error) {
        console.log(error)
        return res.status(403).send('something went wrong ')
    }
}

const editApplicationStatus = async (req, res) => {
    try {
        const { data, job_id } = req.body
        console.log('data:', data, 'id:', job_id)
        const application = await applicationService.editApplicationStatusService({ id: job_id, data: data })
        if (!application) {
            return res.status(403).send('application not found')
        }
        return res.status(200).send('job Updated succesfully')
    } catch (error) {
        console.log(error)
        return res.status(403).send('something went wrong ')
    }
}

module.exports = { getAllJobs, getSingleJob, postJob, applyToJob, getApplications, updateSingleJob, deleteSingleJob, editApplicationStatus }


