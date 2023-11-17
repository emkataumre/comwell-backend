import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {}

export const BookingSchema = SchemaFactory.createForClass(Booking);
