import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, MailService],
})
export class AdminModule {}
