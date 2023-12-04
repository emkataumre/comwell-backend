import { IsNotEmpty } from 'class-validator';
import { Room } from 'src/rooms/schemas/room.schema';

export class CreateBookingDto {
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
    _id: string;
    fullName: string;
    email: string;
    phone: number;
  };

  constructor(
    hotelName: string,
    rooms: Room[],
    startDate: Date,
    endDate: Date,
    customerId: string,
    fullName: string,
    email: string,
    phone: number,
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
      _id: customerId,
      fullName,
      email,
      phone,
    };
  }
}
