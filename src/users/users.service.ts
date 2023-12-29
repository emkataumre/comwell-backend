import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { CreateGuestUserDto } from './dto/create-guest-user.dto';
import { GuestUser } from './schemas/guest-user.schema';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(GuestUser.name) private guestUserModel: Model<GuestUser>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    createdUser.password = await bcrypt.hash(createdUser.password, 10);
    return createdUser.save();
  }

  async createGuest(createGuestUserDto: CreateGuestUserDto) {
    const createdGuestUser = new this.guestUserModel(createGuestUserDto);
    return createdGuestUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    const user = this.userModel.findById(id).exec();
    return user;
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  remove(id: string) {
    const removedUser = this.userModel.findByIdAndDelete(id);
    return removedUser;
  }

  removeAll() {
    return this.userModel.deleteMany({});
  }
}
