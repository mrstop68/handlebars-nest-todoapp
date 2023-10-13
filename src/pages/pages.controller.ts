import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PagesService } from './pages.service';
// import { CreatePageDto } from './dto/create-page.dto';
// import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './interface/page.interface';

// @UseGuards(AuthGuard('jwt'))
@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) { }

  @Get(':id')
  findAll(@Param('id') id): Promise<Page[]> {
    return this.pagesService.findAll(id);
  }

  @Get('editor/:id')
  findPageEditor(@Param('id') id: string) {
    return this.pagesService.findPageEditor(id);
  }
}
