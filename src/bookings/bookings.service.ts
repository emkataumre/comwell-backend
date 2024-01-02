import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { UsersService } from 'src/users/users.service';
import { HotelsService } from 'src/hotels/hotels.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    private usersService: UsersService,
    private hotelsService: HotelsService,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto) {
    const existingUser = await this.usersService.findOneByEmail(
      createBookingDto.customerInfo.email,
    );

    const hotel = await this.hotelsService.findHotelByTitle(
      createBookingDto.hotel.hotelName,
    );
    const hotelID = hotel._id.toString();
    const room = await this.hotelsService.findRoomByNumber(
      hotelID,
      createBookingDto.hotel.rooms[0].number,
    );

    let booking;
    if (!existingUser) {
      const createGuestUserDto = createBookingDto.customerInfo;
      const newGuestUser =
        await this.usersService.createGuest(createGuestUserDto);
      booking = new this.bookingModel({
        ...createBookingDto,
        userID: newGuestUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: createBookingDto.hotel.dates.startDate,
        endDate: createBookingDto.hotel.dates.endDate,
      });
    } else {
      booking = new this.bookingModel({
        // ...createBookingDto,
        userID: existingUser._id,
        hotelID: hotelID,
        roomID: room._id,
        startDate: createBookingDto.hotel.dates.startDate,
        endDate: createBookingDto.hotel.dates.endDate,
      });

      console.log(createBookingDto);
    }
    return booking.save() as Booking;
  }
}
