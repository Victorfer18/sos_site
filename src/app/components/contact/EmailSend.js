"use server";

const nodemailer = require("nodemailer");

export async function EmailSend(to, subject, message) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `SOS-SITE <${process.env.EMAIL_FROM}>`,
    to: to,
    subject: subject,
    html: message,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (err) {
    new Error(err);
  }
}
