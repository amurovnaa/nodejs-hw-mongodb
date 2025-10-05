import nodemailer from 'nodemailer';
import { getEnvVar } from './getEnvVar.js';
import { SMTP } from '../constants/envVars.js';
import createHttpError from 'http-errors';

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: Number(getEnvVar(SMTP.SMTP_PORT)),
  secure: true,
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  const info = await transporter.sendMail(options);
  return info;
};
