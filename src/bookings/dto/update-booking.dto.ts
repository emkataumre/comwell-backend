import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateHotelBookingDto) {}
