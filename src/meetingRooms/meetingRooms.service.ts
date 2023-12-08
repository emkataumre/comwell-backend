import { Injectable } from '@nestjs/common';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MeetingRoom,
  MeetingRoomDocument,
} from './schemas/meetingRooms.schema';
import { HotelsService } from 'src/hotels/hotels.service';

@Injectable()
export class MeetingRoomsService {
  constructor(
    @InjectModel(MeetingRoom.name)
    private meetingRoomModel: Model<MeetingRoomDocument>,

    private readonly hotelsService: HotelsService,
  ) {}

  async findAll() {
    const hotels = await this.hotelsService.findAll();
    return hotels.map((hotel) => hotel.meetingRooms).flat();
  }

  async findById(id: string) {
    const hotels = await this.hotelsService.findAll();

    const room = hotels.map((hotel) =>
      hotel.meetingRooms.filter(
        (room: MeetingRoom & { _id: string }) => room._id == id,
      ),
    );

    return room.flat()[0] || 'No room found';
  }

  async create(
    createMeetingRoomDto: CreateMeetingRoomDto,
  ): Promise<MeetingRoom> {
    const room = new this.meetingRoomModel(createMeetingRoomDto);
    return room.save();
  }

  update(id: number, updateMeetingRoomDto: UpdateMeetingRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
