import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './rooms/rooms.module';
import { HotelsModule } from './hotels/hotels.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/comwell'),
    UsersModule,
    AuthModule,
    RoomsModule,
    HotelsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
