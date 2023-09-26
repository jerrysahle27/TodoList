import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { FindOneParams } from './dto/findone-params.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './graphql/todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}
  async addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    const createdTodo = new this.TodoModel(createTodoDTO);
    return createdTodo.save();
  }

  async getTodo(params: FindOneParams): Promise<Todo> {
    return this.TodoModel.findById(params.id).exec();
  }

  async getTodos(): Promise<Todo[]> {
    return this.TodoModel.find().exec();
  }
  async editTodo(todoID: string, createTodoDTO: UpdateTodoDto): Promise<Todo> {
    return this.TodoModel.findById(todoID).exec();
  }
  async deleteTodo(todoID: string): Promise<any> {
    return this.TodoModel.findById(todoID).exec();
  }
}
