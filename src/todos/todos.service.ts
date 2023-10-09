import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(todoData: any): Promise<Todo> {
    const createdTodo = new this.todoModel(todoData);
    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().lean(); //burada .lean() kullanmassan json objesi olarak dönüyor ve hanslebars sayfasında hata basıyor. #each döngüsünde yazdırırken .lean() kullan
    // return await this.todoModel.find().exec();
  }
}
