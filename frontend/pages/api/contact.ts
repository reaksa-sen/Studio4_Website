import nodemailer, { Transporter } from 'nodemailer';

import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { ContactSchema } from 'screens/contact/types';

export default async function send(req: NextApiRequest, res: NextApiResponse) {
  const MAIL_USERNAME = process.env.NEXT_MAIL_USERNAME;
  const MAIL_PASSWORD = process.env.NEXT_MAIL_PASSWORD;
  const REDIRECT_EMAIL = process.env.NEXT_REDIRECT_EMAIL;

  const body: ContactSchema = req.body;

  const transporter: Transporter = nodemailer.createTransport({
    host: 'mail.hover.com',
    port: 465,
    auth: {
      user: `${MAIL_USERNAME}`,
      pass: `${MAIL_PASSWORD}`
    },
    secure: true
  });

  const mailPackage = {
    from: `${body}`,
    to: `${REDIRECT_EMAIL}`,
    subject: `Contact from ${body.fullName}`,
    text: `${body.message}`,
    html: `<br>${body.message}
            <br><br><br><b>From:</b> ${body.email}
            <br><b>Name:</b> ${body.fullName}
            <br><b>Phone Number:</b> ${body.phone}`
  };

  try {
    await transporter.sendMail(mailPackage);
    res.status(200).json({
      status: 'success',
      message: 'Message sent successfully'
    });
  } catch (error) {
    res.status(400);
  }
}
