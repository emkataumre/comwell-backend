import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateRoomDto } from 'src/rooms/dto/create-room.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = new this.hotelModel(createHotelDto);
    return hotel.save();
  }
  // async addRoom(id: string, room: CreateRoomDto) {
  //   const updateHotel = await this.hotelModel.findById(id);
  //   console.log('room', room);
  //   console.log('updateHotel', updateHotel);
  //   updateHotel?.rooms.push(room);

  //   return updateHotel.save();
  // }

  findAll() {
    return this.hotelModel.find().populate('rooms').exec();
  }

  findOne(id: string) {
    return this.hotelModel.findById(id).exec();
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: string) {
    return `This action removes a #${id} hotel`;
  }
}
