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
    const booking = new this.bookingModel(createBookingDto);
    const user = await this.usersService.findOneByEmail(createBookingDto.email);
    //console.log(user._id); //this gets me the user id back, i added _id to User class and it fills out automatically, needs to be declared beforehand for it to be called her

    if (!user) {
      const user = await this.usersService.createGuest(createGuestUserDto);
      console.log(user);
      return booking.save();
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
