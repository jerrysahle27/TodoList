import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TextMessage } from './graphql/sms.model';
import { Model } from 'mongoose';
import { MessageInputDTO } from './dto/message-input.dto';
import { Twilio } from 'twilio';
import { UsersService } from '../../users/users.service';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sender = process.env.TWILIO_PHONE_NUMBER;
@Injectable()
export class SmsService {
  constructor(
    private usersService: UsersService,
    @InjectModel(TextMessage.name)
    private TextMessageModel: Model<TextMessage>,
  ) {}

  async sendMessage(messageInputDTO: MessageInputDTO): Promise<TextMessage> {
    const client = new Twilio(accountSid, authToken);
    console.log(client)
    console.log(messageInputDTO.ReceiverId);
    const receiver = await this.usersService.findOneById(
     { id: messageInputDTO.ReceiverId}
    );
    console.log(receiver);
    return;
    // client.messages
    //   .create({
    //     body: messageInpu@InjetDTO.Body,
    //     from: sender,
    //     to: receiver.phoneNumber,
    //   })
    //   .then((message) => console.log(message.sid));
    // return;
  }
}
