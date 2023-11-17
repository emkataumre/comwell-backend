import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Room } from 'src/rooms/schemas/room.schema';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel extends Document {
  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  title: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Room.name }] })
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
