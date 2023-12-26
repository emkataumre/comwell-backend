import { Module } from '@nestjs/common';
import { BookersinfoService } from './bookersinfo.service';
import { BookersinfoController } from './bookersinfo.controller';
import { MongooseModule } from '@nestjs/mongoose';
<<<<<<< HEAD
import { Bookerinfo, MeetingSchema } from './schemas/bookerinfo.schema';
=======
import { Bookerinfo, BookerinfoSchema } from './schemas/bookerinfo.schema';
>>>>>>> 07eeadcad600bff9d385df8c12ff4ed1067d3471

@Module({
  imports: [
    MongooseModule.forFeature([
<<<<<<< HEAD
      { name: Bookerinfo.name, schema: MeetingSchema },
=======
      { name: Bookerinfo.name, schema: BookerinfoSchema },
>>>>>>> 07eeadcad600bff9d385df8c12ff4ed1067d3471
    ]),
  ],
  controllers: [BookersinfoController],
  providers: [BookersinfoService],
})
export class BookersinfoModule {}
