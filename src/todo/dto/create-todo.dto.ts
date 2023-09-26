import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class CreateTodoDTO {
  @Field()
  @IsNotEmpty()
  readonly title: string;
  @Field()
  @IsNotEmpty()
  readonly description: string;
  @Field()
  @IsNotEmpty()
  readonly isDone: boolean;
}
