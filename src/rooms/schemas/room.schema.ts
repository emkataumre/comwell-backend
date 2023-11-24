import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Beds } from './beds.schemas';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

export enum Amenity {
  Tv = 'TV',
  Hairdryer = 'HAIRDRYER',
  Workspace = 'WORKSPACE',
  Roomservice = 'ROOMSERVICE',
  Iron = 'IRON',
  Wifi = 'WIFI',
}

@Schema()
export class Room {
  @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
  _id: ObjectId;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  number: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  pictures: string[];
  @Prop({ required: true })
  beds: Beds;
  @Prop()
  amenities: Amenity[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
