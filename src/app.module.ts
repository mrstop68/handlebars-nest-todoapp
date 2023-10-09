import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LanguageMiddleware } from './middleware/language.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { TodoSchema } from './todos/todo.model';
import { HotelSchema } from './hotels/schema/hotel.schema';
import { ExpressAdapter } from '@nestjs/platform-express';
import { HotelsModule } from './hotels/hotels.module';
import * as exphbs from 'express-handlebars';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/todo-app'),
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    HotelsModule,
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {
  constructor() {
    const app = new ExpressAdapter();
    // Handlebars'ı kullanılabilir hale getirin
    const hbs = exphbs.create({});
    // Express'e Handlebars'ı motor olarak tanıtın
    app.engine('hbs', hbs.engine);

    // Görünüm motorunu ayarlayın
    app.setViewEngine('hbs');
  }
  //aşağıda middleware dosyasını entegre ettik url den gelen dil kodunu alabilmek için
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('*');
  }
}
