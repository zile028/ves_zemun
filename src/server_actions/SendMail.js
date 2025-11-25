"use server";
import nodemailer from "nodemailer";

const EMAIL = "office@visoka-ekonomska.edu.rs";
const PASSWORD = "s2zidNPblpqa1IuN";
const HOST = "mail.visoka-ekonomska.edu.rs";
const PORT = 587;
const transporter = nodemailer.createTransport({
    pool: true,
    host: HOST,
    port: PORT,
    secure: false,
    auth: {user: EMAIL, pass: PASSWORD}
});
export const SendMail = async (formData) => {
    const mailOptions = {
        from: `"${formData.fullName}" <${EMAIL}>`,
        to: EMAIL,
        bcc: formData.email,
        subject: 'Порука са сајта',
        text: formData.message

    };
    try {
        let res = await transporter.sendMail(mailOptions);
        return {success: true};
    } catch (error) {
        throw {success: false, message: error.message};
    }


};