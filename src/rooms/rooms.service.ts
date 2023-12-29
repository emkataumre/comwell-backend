import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from './schemas/room.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

  async findAll() {
    return this.roomModel.find().exec();
  }

  async findById(id: string) {
    return this.roomModel.findById(id).exec();
  }

  async create(createRoomDto: CreateRoomDto) {
    const room = new this.roomModel(createRoomDto);
    return room.save();
  }

  findOne(id: string) {
    return this.roomModel.findById(id).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
