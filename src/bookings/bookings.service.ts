import { Injectable } from '@nestjs/common';
import { CreateHotelBookingDto } from './dto/create-booking.dto';
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
    createHotelBookingDto: CreateHotelBookingDto,
    createGuestUserDto: CreateGuestUserDto,
  ): Promise<Booking> {
    const existingUser = await this.usersService.findOneByEmail(
      createGuestUserDto.customerInfo.email,
    );
    let booking;
    const hotel = await this.hotelsService.findHotelByTitle(
      createHotelBookingDto.hotel.hotelName,
    );
    const hotelID = hotel._id.toString();
    const room = await this.hotelsService.findRoomByNumber(
      hotelID,
      createHotelBookingDto.hotel.rooms[0].number,
    );

    if (!existingUser) {
      const newGuestUser =
        await this.usersService.createGuest(createGuestUserDto);
      booking = new this.bookingModel({
        ...createHotelBookingDto,
        userID: newGuestUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: createHotelBookingDto.hotel.dates.startDate,
        endDate: createHotelBookingDto.hotel.dates.endDate,
      });
    } else {
      booking = new this.bookingModel({
        ...createHotelBookingDto,
        userID: existingUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: createHotelBookingDto.hotel.dates.startDate,
        endDate: createHotelBookingDto.hotel.dates.endDate,
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
