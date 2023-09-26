import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodosResolver } from './todo.resolvers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [TodoService, TodosResolver],
  exports: [TodoService],
})
export class TodoModule {}
