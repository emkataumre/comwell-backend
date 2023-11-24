import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateRoomDto } from 'src/rooms/dto/create-room.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Room, RoomDocument } from 'src/rooms/schemas/room.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = new this.hotelModel(createHotelDto);
    return hotel.save();
  }

  async findRoomByNumber(id: string, roomNumber: number): Promise<Room[]> {
    const hotel = await this.hotelModel.findById(id).exec();
    const room = hotel.rooms.filter((room) => room.number == roomNumber);
    return room;
  }

  async findAvailableRooms(
    title: string,
    adults: number,
    kids: number,
    infants: number,
    checkIn: Date,
    checkOut: Date,
  ) {
    const hotel = await this.hotelModel.findOne({ title }).exec();
    const availableRooms: Room[] = hotel.rooms;
    const bookingCapacityRequired =
      Number(adults) + Number(kids) + Number(infants);

    const arrayOfAvailableRooms = availableRooms.filter(
      (room) =>
        room.beds.single + room.beds.double * 2 >= bookingCapacityRequired,
    );
    console.log(arrayOfAvailableRooms);

    return arrayOfAvailableRooms;
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async findHotelByTitle(title: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findOne({ title }).exec();
    return hotel;
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: string) {
    return `This action removes a #${id} hotel`;
  }
}
