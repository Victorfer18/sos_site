"use server";

const nodemailer = require("nodemailer");

export async function EmailSend(to, subject, message) {
  const transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // secure: true,
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASSWORD,
    // },
    /**
     * EMAIL_HOST=smtp.titan.email
EMAIL_USER=servico@ddccompany.com.br
EMAIL_PASSWORD=servico@6969
EMAIL_FROM=servico@ddccompany.com.br
EMAIL_PORT=465

     */
    host: "smtp.titan.email",
    secure: true,
    auth: {
      user: "servico@ddccompany.com.br",
      pass: "servico@6969",
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
    return info;
  } catch (err) {
    new Error(err);
  }
}
