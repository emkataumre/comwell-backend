import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ required: true })
  userID: string;
  @Prop({ required: true })
  hotelID: string;
  @Prop({ required: true })
  roomID: string;
  @Prop({ required: true })
  bookingStartDate: Date;
  @Prop({ required: true })
  bookingEndData: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
