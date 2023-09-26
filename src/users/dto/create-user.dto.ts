import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserDTO {
  @Field()
  @IsNotEmpty()
  firstName: string;
  @Field()
  @IsNotEmpty()
  lastName: string;
  @Field()
  @IsNotEmpty()
  age: number;
  @Field()
  @IsNotEmpty()
  address: string;
  @Field()
  @IsNotEmpty()
  phoneNumber: string;
  @Field()
  @IsNotEmpty()
  gender: string;
  @Field()
  @IsNotEmpty()
  username: string;
  @Field()
  @IsNotEmpty()
  password: string;
}
