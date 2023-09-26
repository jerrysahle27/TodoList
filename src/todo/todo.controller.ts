import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Body,
  Put,
  Query,
  Delete,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { FindOneParams } from './dto/findone-params.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('/')
  async create(@Res() res, @Body() createTodoDTO: CreateTodoDTO) {
    const newTodo = await this.todoService.addTodo(createTodoDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been submitted successfully',
      todo: newTodo,
    });
  }

  @Get('/:id')
  async getTodo(@Res() res, @Param('id') params: FindOneParams) {
    const todo = await this.todoService.getTodo(params);
    if (!todo) {
      throw new NotFoundException('Todo does not exist !');
    }
    return res.status(HttpStatus.OK).json(todo);
  }

  @Get('/')
  async getTodos(@Res() res) {
    const todos = await this.todoService.getTodos();
    return res.status(HttpStatus.OK).json(todos);
  }
  @Put('/')
  async editTodo(
    @Res() res,
    @Query('todoID') todoID,
    @Body() UpdateTodoDto: UpdateTodoDto,
  ) {
    const editedTodo = await this.todoService.editTodo(todoID, UpdateTodoDto);
    if (!editedTodo) {
      throw new NotFoundException('Todo does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been successfully updated',
      todo: editedTodo,
    });
  }
  @Delete('/delete')
  async deleteTodo(@Res() res, @Query('todoID') todoID) {
    const deletedTodo = await this.todoService.deleteTodo(todoID);
    if (!deletedTodo) {
      throw new NotFoundException('Todo does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been successfully deleted',
      todo: deletedTodo,
    });
  }
}
