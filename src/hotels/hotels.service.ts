import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './interface/hotel.interface';
@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<Hotel>,
  ) {}
  create(createHotelDto: CreateHotelDto) {
    return 'This action adds a new hotel';
  }

  async findAll() {
    return await this.hotelModel.find();
  }

  async findOne(id: number) {
    return await this.hotelModel.findById(id);
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
