import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TextMessage } from './graphql/sms.model';
import { SmsService } from './sms.service';
import { MessageInputDTO } from './dto/message-input.dto';

@Resolver((of) => TextMessage)
export class SmsResolver {
  constructor(private smsService: SmsService) {}
  @Mutation(() => TextMessage)
  async sendMessage(
    @Args('input') input: MessageInputDTO,
  ): Promise<TextMessage> {
    return this.smsService.sendMessage(input);
  }
}
