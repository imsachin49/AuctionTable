const nodemailer = require("nodemailer");
const { ApiError } = require("./ApiError");
const { ApiResponse } = require("./ApiResponse");

const sentOnMail = async (sender_email, receiver_email, mail_subject,html_message) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
    });
    
    const mailOptions = {
        from: sender_email,
        to: receiver_email,
        subject: mail_subject,
        html: html_message
    };

    try {
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                throw new ApiError(401, "Error while creating the mail");
            } else {
                return res.status(200).json(new ApiResponse(201, data, `A ${subject} mail Sent Successfully !!`));
            }
        });
    } catch (error) {
        throw new ApiError(500, `Error in Sending the ${subject} mail`);
    }

};

module.exports={sentOnMail};