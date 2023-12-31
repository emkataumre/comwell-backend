import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MeetingRoomsService } from './meetingRooms.service';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';

@Controller('meeting-rooms')
export class MeetingRoomsController {
  constructor(private readonly meetingRoomsService: MeetingRoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateMeetingRoomDto) {
    return this.meetingRoomsService.create(createRoomDto);
  }
  @Get()
  findAll() {
    return this.meetingRoomsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.meetingRoomsService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingRoomsService.remove(+id);
  }
}
