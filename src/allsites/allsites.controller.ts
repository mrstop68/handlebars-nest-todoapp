import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
// import { AllsitesService } from './allsites.service';
import { CreateAllsiteDto } from './dto/create-allsite.dto';
import { UpdateAllsiteDto } from './dto/update-allsite.dto';
import { HotelsService } from './../hotels/hotels.service';
import { PagesService } from './../pages/pages.service';
import { Response, Request } from 'express';

@Controller()
export class AllsitesController {
  constructor(
    private readonly hotelsService: HotelsService,
    private readonly pagesService: PagesService,
  ) {}

  @Post()
  create(@Body() createAllsiteDto: CreateAllsiteDto) {
    return this.hotelsService.create(createAllsiteDto);
  }

  @Get()
  async findHotels(@Res() res: Response, @Req() request: Request) {
    const host = request.headers.host;
    const slctHotel = request['selectedHotel'];
    const slctLangCode = request['languageCode'];

    const pages = await this.pagesService.findAll(slctHotel._id);
    //istek atılan url e göre ilgili sayfayı dil ve linkine göre tespit ediyoruz+
    const page = '/';
    const showPage = pages.find(
      (item) => item.lang == slctHotel.LangCode && item.link == page,
    );
    const linkParse = showPage.linkedpage.match(/^([a-zA-Z]+)_(\d+)$/);
    const linkName = linkParse[1];
    const linkN0 = linkParse[2];
    const useTheme = 'theme' + linkN0;
    if (slctHotel) {
      return res.render(`${useTheme}/${linkName}`, {
        pageTitle: slctHotel.seoinfo.title,
        slctHotel,
        layout: useTheme + '/main',
      });
      // return oneHotel;
    } else {
      return 'Otel bulunamadı'; // Eğer otel bulunamazsa bir hata mesajı döndürebilirsiniz
    }
  }

  @Get(':lang?/:page/')
  async findHotelsPage(
    @Res() res: Response,
    @Req() request: Request,
    @Param('lang') lang: string,
    @Param('page') page: string,
  ) {
    const host = request.headers.host;
    // const userLanguage = request.headers['accept-language'];
    // console.log(host + request.originalUrl);
    // console.log(userLanguage);
    // console.log(request['languageCode']);
    // console.log(request['selectedHotel']);
    // console.log(request.originalUrl);
    // console.log(request.route.path);
    // console.log(request.params);
    //  console.log(lang);
    //  console.log(page);
    // console.log(request);
    // // const allHotels = await this.hotelsService.findAll(); // Burada asenkron bir şekilde veriyi alıyoruz
    // // const hotel = JSON.parse(JSON.stringify(allHotels)); // JSON.parse() fonksiyonu için veriyi string olarak çeviriyoruz
    // // const oneHotel = hotel.find(function (otel: any) {
    // //   return otel.website === host;
    // //   //  return otel.name === 'Larissa Hotel';
    // // });
    //middleware den gelen istek atılan otel ve dil kodu
    const slctHotel = request['selectedHotel'];
    const slctLangCode = request['languageCode'];
    // console.log(lang);
    // console.log(slctLangCode);
    // console.log('page:' + page);
    //eğer dil kodu ile page kodu aynı ise (sadece dillerin anasayfa isteklerinde aynı oluyor) o zaman page değişkenine / ata. çünkü dil anasayfalarınıda / olarak kaydettik panelden
    if (slctLangCode == page) page = '/';
    let showPage;
    if (slctLangCode && slctLangCode == 'mainlang') {
      console.log(slctHotel._id);
      //istek atılan otele ait tüm web sayfalarını alıyoruz
      const pages = await this.pagesService.findAll(slctHotel._id);
      //istek atılan url e göre ilgili sayfayı dil ve linkine göre tespit ediyoruz
      showPage = pages.find(
        (item) => item.lang == slctHotel.LangCode && item.link == page,
      );
      console.log(showPage);
    } else {
      const pages = await this.pagesService.findAll(slctHotel._id);
      showPage = pages.find(
        (item) => item.lang.toLowerCase() == slctLangCode && item.link == page,
      );
      console.log(showPage);
    }
    console.log(showPage.linkedpage);
    const linkParse = showPage.linkedpage.match(/^([a-zA-Z]+)_(\d+)$/);
    const linkName = linkParse[1];
    const linkN0 = linkParse[2];
    const useTheme = 'theme' + linkN0;
    if (slctHotel) {
      return res.render(`${useTheme}/${linkName}`, {
        pageTitle: slctHotel.seoinfo.title,
        slctHotel,
        layout: useTheme + '/main',
      });
      // return oneHotel;
    } else {
      return 'Otel bulunamadı'; // Eğer otel bulunamazsa bir hata mesajı döndürebilirsiniz
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllsiteDto: UpdateAllsiteDto) {
    return this.hotelsService.update(+id, updateAllsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }
}
