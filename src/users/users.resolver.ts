import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './graphql/user.model';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private UsersService: UsersService) {}
  // @Query(() => User)
  // async getUserById(@Args('id') id: string): Promise<User> {
  //   return await this.UsersService.findOneById(id);
  // }
  
  @Query(() => User)
  async getUserById(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.UsersService.findOneById({ id: id });
  }


  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDTO): Promise<User> {
    return await this.UsersService.createUser(input);
  }
}
