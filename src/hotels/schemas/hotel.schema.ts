import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
