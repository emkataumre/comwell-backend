import { Hotel } from 'src/hotels/schemas/hotel.schema';

export class CreateBookingDto {
  email: string;
  hotelTitle: string;
  roomNumber: number;
  startDate: Date;
  endDate: Date;
}
