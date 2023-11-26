import { Room } from 'src/rooms/schemas/room.schema';

export class CreateBookingDto {
  hotel: {
    hotelName: string;
    rooms: Room[];
    dates: {
      startDate: Date;
      endDate: Date;
    };
  };
  customerInfo: {
    _id: string;
    fullName: string;
    email: string;
    phone: number;
  };
}
