import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [SellerController],
  providers: [SellerService, MailService],
})
export class SellerModule {}
