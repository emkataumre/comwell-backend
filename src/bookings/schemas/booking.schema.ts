import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
  _id: string;
  @Prop({ required: true })
  userID: string;
  @Prop({ required: true })
  hotelID: string;
  @Prop({ required: true })
  roomID: string;
  @Prop()
  bookingStartDate: Date;
  @Prop()
  bookingEndDate: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
