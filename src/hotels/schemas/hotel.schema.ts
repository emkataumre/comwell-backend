import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Room } from '../../rooms/schemas/room.schema';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop({ required: true })
  country: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  phone: number;
  @Prop({ required: true })
  title: string;

  @Prop([Room])
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
