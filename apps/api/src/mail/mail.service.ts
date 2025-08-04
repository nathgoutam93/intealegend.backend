import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendVerificationComplete(email: string, uniqueIdentifier: string) {
    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to: email,
      subject: 'Account Verified - Your Unique Identifier',
      html: `
        <h1>Your account has been verified!</h1>
        <p>Your unique identifier is: <strong>${uniqueIdentifier}</strong></p>
        <p>You can use this identifier to log in to your account.</p>
      `,
    });
  }

  async sendPasswordResetLink(email: string, resetUrl: string) {
    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to: email,
      subject: 'Reset Your Password',
      html: `
        <h1>Password Reset Request</h1>
        <p>We received a request to reset your password. Click the link below to set a new password:</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>If you did not request this, you can safely ignore this email.</p>
      `,
    });
  }

  async sendPasswordResetSuccess(email: string) {
    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to: email,
      subject: 'Your Password Has Been Reset',
      html: `
        <h1>Password Reset Successful</h1>
        <p>Your password has been successfully reset. If you did not perform this action, please contact support immediately.</p>
      `,
    });
  }

  // Helper method to verify smtp connection
  async testConnection() {
    try {
      const connection = await this.transporter.verify();
      console.log('Mail server is ready to send messages');
      return connection;
    } catch (error) {
      console.error('Error connecting to mail server:', error);
      throw error;
    }
  }
}
