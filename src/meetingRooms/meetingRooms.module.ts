import { Module } from '@nestjs/common';
import { MeetingRoomsService } from './meetingRooms.service';
import { MeetingRoomsController } from './meetingRooms.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { MeetingRoom, MeetingRoomSchema } from './schemas/meetingRooms.schema';
import { HotelsModule } from 'src/hotels/hotels.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeetingRoom.name, schema: MeetingRoomSchema },
    ]),
    HotelsModule,
  ],
  controllers: [MeetingRoomsController],
  providers: [MeetingRoomsService],
})
export class MeetingRoomsModule {}
