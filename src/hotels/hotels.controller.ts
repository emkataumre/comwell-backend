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

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

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
