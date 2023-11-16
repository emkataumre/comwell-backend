import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop({ required: true })
  hotelID: string;
  @Prop({ required: true })
  singleBedAmount: number;
  @Prop({ required: true })
  doubleBedAmount: number;
  @Prop()
  hasTV: boolean;
  @Prop()
  hasFreeWifi: boolean;
  @Prop()
  hasHairDryer: boolean;
  @Prop()
  hasRoomServiceAvailable: boolean;
  @Prop()
  hasBalcony: boolean;
  @Prop()
  isWorkspace: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
