import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import * as exphbs from 'express-handlebars';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  app.engine('hbs', exphbs());
  app.set('view engine', 'hbs');
  app.set('views', 'views'); // Şablonlarınızın bulunduğu klasörü belirtin.
  app.use('/public', express.static('public')); // "public" dizinini sunucuya erişilebilir hale getirin
  await app.listen(3001);
}
bootstrap();
