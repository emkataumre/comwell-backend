import { Module } from '@nestjs/common';
import { BookersinfoService } from './bookersinfo.service';
import { BookersinfoController } from './bookersinfo.controller';

@Module({
  controllers: [BookersinfoController],
  providers: [BookersinfoService],
})
export class BookersinfoModule {}
