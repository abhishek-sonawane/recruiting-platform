const Applications = require("../models/Applications")

const findAllApplications = async () => {
    const jobApplications = await Applications.find()
    return jobApplications
}

const editApplicationStatusService = async ({ id, data }) => {
    console.log('inside edit application status service', id, data)
    const modifiedApplication = await Applications.findByIdAndUpdate(id,
        { $set: { status: data } })
    console.log(modifiedApplication, 'modified application')
    return modifiedApplication
}


module.exports = { findAllApplications, editApplicationStatusService }