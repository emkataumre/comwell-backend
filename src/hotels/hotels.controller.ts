import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  // // Rooms
  // @Post(':id/rooms')
  // addRoom(
  //   @Param('id') id: string,
  //   @Body() room: CreateRoomDto,
  // ): Promise<Hotel> {
  //   return this.hotelsService.addRoom(id, room);
  // }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  // @Get(':title')
  // findOne(@Param('title') title: string) {
  //   return this.hotelsService.findOneByTitle(title);
  // }

  @Get(':title')
  findAvailableRooms(
    @Param('title') title: string,
    @Query('adults') adults: number,
    @Query('kids') kids: number,
    @Query('infants') infants: number,
    @Query('checkIn') checkIn: Date,
    @Query('checkOut') checkOut: Date,
  ) {
    return this.hotelsService.findAvailableRooms(
      title,
      adults,
      kids,
      infants,
      checkIn,
      checkOut,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(id);
  }
}
