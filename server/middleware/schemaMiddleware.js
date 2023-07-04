const z = require('zod')


const validationMiddleware = (schema) => (req,res,next)=> {
        try {
             schema.parse({
                body:req.body,
                query: req.query,
                params: req.params,
                // file:req.file
            })  

            return next()
        } catch (error) {
            return res.status(400).json(error);
        }

}

module.exports = validationMiddleware;