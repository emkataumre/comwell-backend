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

import { Booking } from './schemas/booking.schema';
import { CreateGuestUserDto } from 'src/users/dto/create-guest-user.dto';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // Bookings
  @Post('/create-booking')
  createBooking(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingsService.createBooking(createBookingDto);
  }
}
