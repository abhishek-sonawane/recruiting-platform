const Jobs = require("../models/Jobs")
const Applications = require("../models/Applications")
const nodemailer = require('nodemailer')


const findJobByID =async(id)=>{
    const job = await Jobs.findById(id)
    return job
}


// apply to job 
const postApplyToJob = async(payload)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "abhisheks@iconnectsolutions.com",
          pass: "gdbv bhcx hikh nqrg",
        },
      });
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
    const appliedJob = await findJobByID(payload.job_id)
    const info = await transporter.sendMail({
        from: '"abhisheks@iconnectsolutions.com', // sender address
        to: payload.email, // list of receivers
        subject: "Application submitted to iconnect", // Subject line
        text: `Your Application for ${appliedJob.title} has been submitted`, // plain text body
        html: `<b>Your Application for ${appliedJob.title} has been submitted</b> <br/> <p>We will contact you shortly if you are fit for the role.</p>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
    
   } catch (error) {
        console.log(`service :: postApplyToJob error message: ${error.message}`)
   }
}

module.exports ={findJobByID,postApplyToJob}