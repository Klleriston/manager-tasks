import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transport;
  constructor() {
    this.transport = nodemailer.createTransport({
      service: 'SEU SERVICO DE EMAIL (GMAIL, OUTLOOK, ETC)',
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD_EMAIL,
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOption = {
      from: 'REMETENTE',
      to,
      subject,
      text,
    };
    return this.transport.sendMail(mailOption);
  }
}
