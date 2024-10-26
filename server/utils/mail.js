const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const sendEmail = async (to, subject, html) => {
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

    const info = await transporter.sendMail({
        from: `abhisheks@iconnectsolutions.com`, // Use environment variable for the sender
        to,
        subject,
        html,
    });

    console.log("Message sent: %s", info.messageId);
};

module.exports = { sendEmail };
