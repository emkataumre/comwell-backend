import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateRoomDto } from 'src/rooms/dto/create-room.dto';
import { Hotel } from './schemas/hotel.schema';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelsService.create(createHotelDto);
  }

  @Post(':id/rooms')
  addRoom(
    @Param('id') id: string,
    @Body() room: CreateRoomDto,
  ): Promise<Hotel> {
    return this.hotelsService.addRoom(id, room);
  }

  @Get()
  findAllHotels() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(id);
  }
}
