import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop()
  userID: string;
  @Prop()
  hotelID: string;
  @Prop()
  roomID: string;
  @Prop()
  bookingStartDate: Date;
  @Prop()
  bookingEndDate: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
