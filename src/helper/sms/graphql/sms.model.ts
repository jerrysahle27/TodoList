import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TextMessage {
  @Field()
  id: string;
  @Field()
  Reciever: string;
  @Field()
  Body: string;
  @Field()
  Status: boolean;
  @Field()
  messageId: string;
}
