import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { UsersService } from 'src/users/users.service';
import { CreateGuestUserDto } from 'src/users/dto/create-guest-user.dto';
import { HotelsService } from 'src/hotels/hotels.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    private usersService: UsersService,
    private hotelsService: HotelsService,
  ) {}

  async createBooking(
    CreateBookingDto: CreateBookingDto,
    createGuestUserDto: CreateGuestUserDto,
  ): Promise<Booking> {
    const existingUser = await this.usersService.findOneByEmail(
      CreateBookingDto.customerInfo.email,
    );

    let booking;
    const hotel = await this.hotelsService.findHotelByTitle(
      CreateBookingDto.hotel.hotelName,
    );
    const hotelID = hotel._id.toString();
    const room = await this.hotelsService.findRoomByNumber(
      hotelID,
      CreateBookingDto.hotel.rooms[0].number,
    );
    if (!existingUser) {
      const newGuestUser =
        await this.usersService.createGuest(createGuestUserDto);

      booking = new this.bookingModel({
        ...CreateBookingDto,
        userID: newGuestUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: CreateBookingDto.hotel.dates.startDate,
        endDate: CreateBookingDto.hotel.dates.endDate,
      });
    } else {
      booking = new this.bookingModel({
        ...CreateBookingDto,
        userID: existingUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: CreateBookingDto.hotel.dates.startDate,
        endDate: CreateBookingDto.hotel.dates.endDate,
      });
    }
    return booking.save();
  }
  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
