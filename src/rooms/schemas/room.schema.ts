// room.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Amenities, AmenitiesSchema } from './amenities.schema';
import { Beds } from './beds.schemas';
import { HydratedDocument } from 'mongoose';

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
  @Prop({ required: true })
  name: string;
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
