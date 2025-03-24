import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      // Configure your email service
      host: this.configService.get('SMTP_HOST'),
      port: this.configService.get('SMTP_PORT'),
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
    });
  }

  async sendVerificationComplete(email: string, uniqueIdentifier: string) {
    await this.transporter.sendMail({
      to: email,
      subject: 'Account Verified - Your Unique Identifier',
      html: `
        <h1>Your account has been verified!</h1>
        <p>Your unique identifier is: <strong>${uniqueIdentifier}</strong></p>
        <p>You can use this identifier to log in to your account.</p>
      `,
    });
  }
}
