
import { Args, Query, Resolver, ID, Mutation } from '@nestjs/graphql';
import { Todo } from './graphql/todo.model';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodosResolver {
  constructor(private todosService: TodoService) {}

  @Query(() => [Todo])
  async getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Query(() => Todo)
  async getTodo(@Args('id', { type: () => ID }) id: string): Promise<Todo> {
    return this.todosService.getTodo({ id: id });
  }

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoDTO): Promise<Todo> {
    return this.todosService.addTodo(input);
  }
  @Mutation(() => Todo)
  async updateTodo(
    @Args('input') input: CreateTodoDTO,
    @Args('postId') todoId: string,
  ): Promise<Todo> {
    return this.todosService.editTodo(todoId, input);
  }
}
