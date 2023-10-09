// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Body, Res, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Response, Request } from 'express';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() todoData: any) {
    return this.todosService.create(todoData);
  }

  @Get()
  async findAll() {
    return this.todosService.findAll();
  }

  @Get('/list')
  async getTodos(@Res() res: Response, @Req() request: Request) {
    const host = request.headers.host; //gelen domain adını aldık
    const todos = await this.todosService.findAll(); // Veritabanından yapılacakları alın.
    return res.render('todos', { pageTitle: 'eeee', todos }); // "todos.hbs" şablonunu kullanarak HTML'i yanıt olarak gönderin.
    // return todos;
  }

  @Get('/alanadi')
  async getHello(@Req() request: Request) {
    const host = request.headers.host;
    return host;
  }
}
