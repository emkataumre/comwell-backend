import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room extends Document {
  @Prop()
  singleBedAmount: number;

  @Prop()
  doubleBedAmount: number;

  @Prop()
  hasTv: boolean;

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
