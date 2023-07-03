const z = require('zod')

const JobSchema = z.object({
   body: z.object({
    title:z.string({required_error:'title for job is required'}),
    description:z.string()
   })
})


module.exports = JobSchema