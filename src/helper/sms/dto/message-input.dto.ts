import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class MessageInputDTO {
  @Field()
  @IsNotEmpty()
  ReceiverId: string;
  @Field()
  @IsNotEmpty()
  Body: string;
}
