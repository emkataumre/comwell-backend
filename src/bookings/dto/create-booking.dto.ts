import { IsNotEmpty } from 'class-validator';
import { Room } from 'src/rooms/schemas/room.schema';

export class CreateBookingDto {
  constructor(
    hotelName: string,
    rooms: Room[],
    startDate: Date,
    endDate: Date,
    fullName: string,
    email: string,
    phone: string,
  ) {
    this.hotel = {
      hotelName,
      rooms,
      dates: {
        startDate,
        endDate,
      },
    };
    this.customerInfo = {
      fullName,
      email,
      phone,
    };
  }
  @IsNotEmpty()
  hotel: {
    hotelName: string;
    rooms: Room[];
    dates: {
      startDate: Date;
      endDate: Date;
    };
  };
  @IsNotEmpty()
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
  };
}
