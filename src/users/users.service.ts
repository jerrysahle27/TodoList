import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { User } from './graphql/user.model';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { FindOneParams } from '../todo/dto/findone-params.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async findOne(username: string): Promise<User> {
    return this.UserModel.findOne((user) => user.username == username);
  }

  async findOneById(params: FindOneParams): Promise<User> {
    return this.UserModel.findById(params.id).exec();
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const saltRounds = 10;
    // const salt = bcrypt.genSaltSync(saltRounds);
    createUserDTO.password = bcrypt.hashSync(
      createUserDTO.password,
      saltRounds,
    );
    const createdUser = new this.UserModel({
      ...createUserDTO,
      _id: new mongoose.Types.ObjectId(),
    });
    return createdUser.save();
  }
}
