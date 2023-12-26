import { Module } from '@nestjs/common';
import { BookersinfoService } from './bookersinfo.service';
import { BookersinfoController } from './bookersinfo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from 'src/hotels/hotels.module';
import { Bookerinfo, BookerinfoSchema } from './schemas/bookerinfo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookerinfo.name, schema: BookerinfoSchema },
    ]),
  ],
  controllers: [BookersinfoController],
  providers: [BookersinfoService],
})
export class BookersinfoModule {}
