import { Module } from '@nestjs/common';
import { BookersinfoService } from './bookersinfo.service';
import { BookersinfoController } from './bookersinfo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookerinfo, MeetingSchema } from './schemas/bookerinfo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookerinfo.name, schema: MeetingSchema },
    ]),
  ],
  controllers: [BookersinfoController],
  providers: [BookersinfoService],
})
export class BookersinfoModule {}
