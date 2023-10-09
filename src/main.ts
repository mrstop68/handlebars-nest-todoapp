import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import * as exphbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  app.engine('hbs', exphbs());
  app.set('view engine', 'hbs');
  app.set('views', 'views'); // Şablonlarınızın bulunduğu klasörü belirtin.

  await app.listen(3001);
}
bootstrap();
