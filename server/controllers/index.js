const Jobs = require('../models/Jobs')

const index = async (req, res) => {
    try {
        const jobsFromDB = await Jobs.find()
        // let jobsFromDB ='hi'
        console.log(jobsFromDB)
        res.json(jobsFromDB)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching jobs' });
    }
}

module.exports = index