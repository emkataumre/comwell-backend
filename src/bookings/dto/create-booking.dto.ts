import { Room } from 'src/rooms/schemas/room.schema';

export class CreateHotelBookingDto {
  hotel: {
    hotelName: string;
    rooms: Room[];
    dates: {
      startDate: Date;
      endDate: Date;
    };
  };
}
