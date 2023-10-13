import { Injectable } from '@nestjs/common';
// import { CreateAllsiteDto } from './dto/create-allsite.dto';
// import { UpdateAllsiteDto } from './dto/update-allsite.dto';

@Injectable()
export class AllsitesService {
  // create(createAllsiteDto: CreateAllsiteDto) {
  //   return 'This action adds a new allsite';
  // }

  findAll() {
    return `This action returns all allsites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allsite`;
  }

  // update(id: number, updateAllsiteDto: UpdateAllsiteDto) {
  //   return `This action updates a #${id} allsite`;
  // }

  remove(id: number) {
    return `This action removes a #${id} allsite`;
  }
}
