import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  
  @Field()
  age: number;
  @Field()
  address: string;
  @Field()
  phoneNumber: string;
  @Field()
  gender: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
