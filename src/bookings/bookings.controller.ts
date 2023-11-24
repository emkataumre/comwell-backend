import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './schemas/booking.schema';
import { CreateGuestUserDto } from 'src/users/dto/create-guest-user.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // Bookings
  @Post()
  createBooking(
    @Body() createBookingDto: CreateBookingDto,
    @Body() createGuestUserDto: CreateGuestUserDto,
  ): Promise<Booking> {
    return this.bookingsService.createBooking(
      createBookingDto,
      createGuestUserDto,
    );
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(+id);
  }
}
