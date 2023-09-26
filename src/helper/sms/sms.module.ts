import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TextMessage, TextMessageSchema } from './schema/sms.schema';
import { SmsResolver } from './sms.resolvers';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: TextMessage.name, schema: TextMessageSchema },
    ]),
  ],
  providers: [SmsService, SmsResolver],
  exports: [SmsService],
})
export class SmsModule {}
