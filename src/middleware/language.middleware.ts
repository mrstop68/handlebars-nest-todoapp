import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HotelsService } from './../hotels/hotels.service';
@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  constructor(private readonly hotelsService: HotelsService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    // const languageCode = req.originalUrl.split('/')[1];
    const languageCode = req.originalUrl.split('/');
    const possibleLanguages = [
      'tr',
      'en',
      'de',
      'ru',
      'fr',
      'it',
      'es',
      'pt',
      'pl',
      'af',
      'hy',
      'eu',
      'bn',
      'bg',
      'ca',
      'km',
      'zh',
      'hr',
      'cs',
      'da',
      'nl',
      'et',
      'fj',
      'fi',
      'ka',
      'el',
      'gu',
      'he',
      'hi',
      'hu',
      'is',
      'id',
      'ga',
      'ja',
      'jw',
      'ko',
      'la',
      'lv',
      'lt',
      'mk',
      'ms',
      'ml',
      'mt',
      'mi',
      'mr',
      'mn',
      'ne',
      'no',
      'fa',
      'pa',
      'qu',
      'ro',
      'sm',
      'sr',
      'sk',
      'sl',
      'sw',
      'sv',
      'ta',
      'tt',
      'te',
      'th',
      'bo',
      'to',
      'uk',
      'ur',
      'uz',
      'vi',
      'cy',
      'xh',
    ]; // Desteklenen dillerin listesi
    let language = 'mainlang'; // Varsayılan dil

    if (languageCode.length > 1) {
      const segmentAfterSlash = languageCode[1];

      // Dil kodu, desteklenen dillerden biri ise kullanın
      if (possibleLanguages.includes(segmentAfterSlash)) {
        language = segmentAfterSlash;
      }
    }

    // İstek nesnesine dil kodunu ekleyin
    req['languageCode'] = language;
    // req['languageCode'] = languageCode;

    //istek atılan oteli tespit etme
    const host = req.headers.host;
    const allHotels = await this.hotelsService.findAll(); // Burada asenkron bir şekilde veriyi alıyoruz
    const hotel = JSON.parse(JSON.stringify(allHotels)); // JSON.parse() fonksiyonu için veriyi string olarak çeviriyoruz
    const selectedHotel = hotel.find(function (otel: any) {
      return otel.website === host;
      //  return otel.name === 'Larissa Hotel';
    });
    req['selectedHotel'] = selectedHotel;
    next();
  }
}
