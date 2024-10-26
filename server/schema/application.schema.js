const z = require('zod')

const ApplicationSchema = z.object({
   body: z.object({
      name: z.string({ required_error: 'name of candidate is required' }),
      email: z.string({ required_error: 'email for job Application is required' }).email()
   })
})


module.exports = ApplicationSchema