import { Injectable } from '@nestjs/common';
import { CreateBookerinfoDto } from './dto/create-bookersinfo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookerinfo } from './schemas/bookerinfo.schema';

@Injectable()
export class BookersinfoService {
  constructor(
    @InjectModel(Bookerinfo.name) private userModel: Model<Bookerinfo>,
  ) {}

  async create(createBookerinfoDto: CreateBookerinfoDto) {
    const bookerInfo = new this.userModel(createBookerinfoDto);
    return bookerInfo.save();
  }

  findAll() {
    return `This action returns all bookersinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookersinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookersinfo`;
  }
}
