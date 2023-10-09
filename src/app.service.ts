import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotels/interface/hotel.interface';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<Hotel>,
  ) {}
  // getHello(): string {
  //   return 'Hello World!';
  // }

  async findHotels() {
    return await this.hotelModel.find();
  }
}
