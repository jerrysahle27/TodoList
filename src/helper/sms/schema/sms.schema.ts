import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../../users/schemas/user.schema';

export type TextMessageDocument = HydratedDocument<TextMessage>;

@Schema()
export class TextMessage {
  @Prop({ type: User, ref: 'User' })
  Receiver: string;

  @Prop()
  Body: string;

  @Prop()
  messageId: string;

  @Prop()
  Status: boolean;
}

export const TextMessageSchema = SchemaFactory.createForClass(TextMessage);
