import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const languageCode = req.originalUrl.split('/')[1];
    // Dil kodunu isteğe ekleyebiliriz
    req['languageCode'] = languageCode;

    next();
  }
}
