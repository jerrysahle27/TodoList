import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SmsModule } from './helper/sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot(),
    TodoModule,
    MongooseModule.forRoot(
      'mongodb+srv://jerrysahle:096913@cluster0.0irze68.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
    SmsModule,
  ],
})
export class AppModule {}
