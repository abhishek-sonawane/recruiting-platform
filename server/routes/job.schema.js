const z = require('zod')

const JobSchema = z.object({
   body: z.object({
    title:z.string({required_error:'title for job is required'}),
    description:z.string(),
    experience:z.string({required_error:'experience for job is required'}),

    job_type:z.string({required_error:'job Type for job is required'}),

   })
})


module.exports = JobSchema