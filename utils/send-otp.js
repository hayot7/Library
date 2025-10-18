const nodemailer = require("nodemailer")

module.exports = async function (email, otp) {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "hayotbekyuldashev62@gmail.com",
                pass: process.env.APP_PASS
            }
        })

        await transport.sendMail({
            from: "hayotbekyuldashev62@gmail.com",
            for: email,
            subject: "DevBook",
            text: "Verification code from devbook",
            html: `<b style="font-size: 24px; color: blue;>Verify code: ${otp}<h1>`  
        })
    } catch (error) {
        throw new Error(error)
    }
}