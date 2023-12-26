import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BookersinfoService } from './bookersinfo.service';
import { CreateBookerinfoDto } from './dto/create-bookersinfo.dto';

@Controller('bookers-info')
export class BookersinfoController {
  constructor(private readonly bookersinfoService: BookersinfoService) {}

  @Post()
  create(@Body() createBookerinfoDto: CreateBookerinfoDto) {
    return this.bookersinfoService.create(createBookerinfoDto);
  }

  @Get()
  findAll() {
    return this.bookersinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookersinfoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookersinfoService.remove(+id);
  }
}
