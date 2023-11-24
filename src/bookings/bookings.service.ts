import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
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
    createBookingDto: CreateBookingDto,
    createGuestUserDto: CreateGuestUserDto,
  ): Promise<Booking> {
    const existingUser = await this.usersService.findOneByEmail(
      createBookingDto.email,
    );
    let booking = undefined;
    const hotel = await this.hotelsService.findHotelByTitle(
      createBookingDto.hotelTitle,
    );
    const hotelID = hotel._id.toString();
    const room = await this.hotelsService.findRoomByNumber(
      hotelID,
      createBookingDto.roomNumber,
    );

    if (!existingUser) {
      const newGuestUser =
        await this.usersService.createGuest(createGuestUserDto);
      booking = new this.bookingModel({
        ...createBookingDto,
        userID: newGuestUser._id,
        hotelID: hotelID,
        roomID: room[0]._id,
        startDate: createBookingDto.startDate,
        endDate: createBookingDto.endDate,
      });
      console.log('guest booking:', booking);
    } else {
      booking = new this.bookingModel({
        ...createBookingDto,
        userID: existingUser._id,
        hotelID: hotelID,
        roomID: room[0]._id,
        startDate: createBookingDto.startDate,
        endDate: createBookingDto.endDate,
      });
      console.log('loggedin booking:', booking);
    }
    return booking.save();
  }
  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
