import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { UsersService } from 'src/users/users.service';
import { CreateGuestUserDto } from 'src/users/dto/create-guest-user.dto';
@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    private usersService: UsersService,
  ) {}

  async createBooking(
    createBookingDto: CreateBookingDto,
    createGuestUserDto: CreateGuestUserDto,
  ): Promise<Booking> {
    const existingUser = await this.usersService.findOneByEmail(
      createBookingDto.email,
    );
    //  console.log(existingUser._id); //this gets me the user id back, i added _id to User class and it fills out automatically, needs to be declared beforehand for it to be called her
    let booking = undefined;
    if (!existingUser) {
      const newGuestUser =
        await this.usersService.createGuest(createGuestUserDto);
      booking = new this.bookingModel({
        ...createBookingDto,
        userID: newGuestUser._id,
      });
    } else {
      booking = new this.bookingModel({
        ...createBookingDto,
        userID: existingUser._id,
      });
    }

    console.log('this is our existing user booking', booking);
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
