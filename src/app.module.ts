import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { HotelsModule } from '../src/hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { MeetingRoomsModule } from './meetingRooms/meetingRooms.module';
import { BookersinfoModule } from './bookersinfo/bookersinfo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/comwell'),
    UsersModule,
    AuthModule,
    BookingsModule,
    HotelsModule,
    RoomsModule,
    MeetingRoomsModule,
    BookersinfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
