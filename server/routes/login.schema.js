const z = require('zod')

const LoginSchema = z.object({
   body: z.object({
    username:z.string({required_error:'username is required'}),
    password:z.string({required_error:'password is required'})
   })
})  


module.exports = LoginSchema