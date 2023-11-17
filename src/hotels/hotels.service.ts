import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './schemas/hotel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from 'src/rooms/dto/create-room.dto';
import { Room, RoomDocument } from 'src/rooms/schemas/room.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    @InjectModel(Room.name) private readonly roomModel: Model<RoomDocument>,
  ) {}
  create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const newHotel = new this.hotelModel(createHotelDto).save();
    return newHotel;
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().populate('rooms');
  }

  findOne(id: string): Promise<Hotel> {
    return this.hotelModel.findById(id).exec();
  }

  async update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    const updatedHotel = this.hotelModel.findByIdAndUpdate(id, updateHotelDto);
    return updatedHotel;
  }

  async addRoom(id: string, room: CreateRoomDto) {
    const updateHotel = await this.hotelModel.findById(id);
    const newRoom = new this.roomModel(room);
    updateHotel.rooms.push(newRoom);
    //  Teacher Chrisitan's code didnt work here and I had to do a work-around
    //  I make the room throgh its model and then pass it in the push function
    return updateHotel.save();
  }

  remove(id: string) {
    return `This action removes a #${id} hotel`;
  }
}
