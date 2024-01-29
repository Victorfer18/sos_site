"use server";

const nodemailer = require("nodemailer");

export async function EmailSend(to, subject, message) {
  const transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    host: "smtp.titan.email",
    secure: true,
    auth: {
      // user: process.env.EMAIL_USER,
      user: "servico@ddccompany.com.br",
      // pass: process.env.EMAIL_PASSWORD,
      pass: "servico@6969",
    },
  });

  const mailOptions = {
    // from: `SOS-SITE <${process.env.EMAIL_FROM}>`,
    from: `SOS-SITE <${"servico@ddccompany.com.br"}>`,
    to: to,
    subject: subject,
    html: message,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (err) {
    new Error(err);
  }
}
