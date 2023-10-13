import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LanguageMiddleware } from './middleware/language.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { TodoSchema } from './todos/todo.model';
import { HotelSchema } from './hotels/schema/hotel.schema';
import { PageSchema } from './pages/schema/pages.schema';
import { ExpressAdapter } from '@nestjs/platform-express';
// import { HotelModule } from './hotels/hotels.module';
import * as exphbs from 'express-handlebars';
import { HotelsService } from './hotels/hotels.service';
import { HotelsController } from './hotels/hotels.controller';
import { PagesService } from './pages/pages.service';
import { PagesController } from './pages/pages.controller';
import { AllsitesService } from './allsites/allsites.service';
import { AllsitesController } from './allsites/allsites.controller';
// import { AllsitesModule } from './allsites/allsites.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/todo-app'),
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
    MongooseModule.forFeature([{ name: 'Page', schema: PageSchema }]),
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
  ],
  controllers: [
    HotelsController,
    PagesController,
    TodosController,
    AppController,
    AllsitesController,
  ],
  providers: [
    HotelsService,
    PagesService,
    TodosService,
    AppService,
    AllsitesService,
  ],
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
