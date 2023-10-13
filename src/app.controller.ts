import { Controller, Get, Res, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
// import { HotelsService } from './hotels/hotels.service';
import { Response, Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // // @Get()
  // // async findHotels(@Res() res: Response, @Req() request: Request) {
  // //   const host = request.headers.host;
  // //   // const userLanguage = request.headers['accept-language']; // bu tarayıcı dillerini alıyor
  // //   // console.log(userLanguage);
  // //   const allHotels = await this.appService.findHotels(); // Burada asenkron bir şekilde veriyi alıyoruz
  // //   const hotel = JSON.parse(JSON.stringify(allHotels)); // JSON.parse() fonksiyonu için veriyi string olarak çeviriyoruz
  // //   const oneHotel = hotel.find(function (otel: any) {
  // //     return otel.website === host;
  // //     //  return otel.name === 'Larissa Hotel';
  // //   });
  // //   if (oneHotel) {
  // //     return res.render('theme2/index', {
  // //       pageTitle: oneHotel.seoinfo.title,
  // //       oneHotel,
  // //       layout: 'theme2/main',
  // //     });
  // //     // return oneHotel;
  // //   } else {
  // //     return 'Otel bulunamadı'; // Eğer otel bulunamazsa bir hata mesajı döndürebilirsiniz
  // //   }
  // // }

  // // @Get(':lang?/:page/')
  // // async findHotelsPage(
  // //   @Res() res: Response,
  // //   @Req() request: Request,
  // //   @Param('lang') lang: string,
  // //   @Param('page') page: string,
  // // ) {

  // //   const host = request.headers.host;
  // //   const userLanguage = request.headers['accept-language'];
  // //   console.log(host + request.originalUrl);
  // //   console.log(userLanguage);
  // //   console.log(request['languageCode']);
  // //   console.log(request.originalUrl);
  // //   console.log(request.route.path);
  // //   console.log(request.params);
  // //   console.log(lang);
  // //   console.log(page);
  // //   // console.log(request);
  // //   const allHotels = await this.appService.findHotels(); // Burada asenkron bir şekilde veriyi alıyoruz
  // //   const hotel = JSON.parse(JSON.stringify(allHotels)); // JSON.parse() fonksiyonu için veriyi string olarak çeviriyoruz
  // //   const oneHotel = hotel.find(function (otel: any) {
  // //     return otel.website === host;
  // //     //  return otel.name === 'Larissa Hotel';
  // //   });
  // //   if (oneHotel) {
  // //     return res.render('theme2/index', {
  // //       pageTitle: oneHotel.seoinfo.title,
  // //       oneHotel,
  // //       layout: 'theme2/main',
  // //     });
  // //     // return oneHotel;
  // //   } else {
  // //     return 'Otel bulunamadı'; // Eğer otel bulunamazsa bir hata mesajı döndürebilirsiniz
  // //   }
  // // }
}
