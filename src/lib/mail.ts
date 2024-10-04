import nodemailer from "nodemailer";

export async function getMailClient() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ENDERECO_GMAIL,
      pass: process.env.SENHA_DE_APP,
    },
  });

  return transporter;
}
