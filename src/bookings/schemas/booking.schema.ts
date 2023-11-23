import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
  _id: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  userID: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  hotelID: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  roomID: string;
  @Prop()
  bookingStartDate: Date;
  @Prop()
  bookingEndDate: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
