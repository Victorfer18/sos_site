require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

function validateToken(token) {
  const secretKey = process.env.JWT_SECRET_KEY;

  try {
    jwt.verify(token, secretKey);
    return true;
  } catch (err) {
    return false;
  }
}

async function EmailSend(to, subject, message) {
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
    return { success: true, info };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

const app = express();
const port = 3000;

const baseDir = `${__dirname}/out/`;
app.use(express.static(`${baseDir}`));
app.get("/", (req, res) => res.sendFile("index.html", { root: baseDir }));
app.get("/home", (req, res) => res.sendFile("home.html", { root: baseDir }));
app.get("/services", (req, res) =>
  res.sendFile("services.html", { root: baseDir })
);
app.use(express.json());

app.post("/send_email", async (req, res) => {
  const { to, subject, message, token } = req.body;

  //   if (!validateToken(token)) {
  //     res.status(401).send("Token inválido");
  //     return;
  //   }

  try {
    const result = await EmailSend(to, subject, message);
    if (result.success) {
      res.status(200).send(result.info);
    } else {
      res.status(500).send(result.error);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao enviar e-mail");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const secretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(payload, secretKey);

  return token;
}
