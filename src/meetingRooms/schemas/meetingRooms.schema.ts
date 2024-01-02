import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MeetingRoomDocument = HydratedDocument<MeetingRoom>;

@Schema()
export class MeetingRoom {
  @Prop({ required: true })
  maxCapacity: number;
  @Prop({ required: true })
  picture: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  bulletPoints: string[];
}

export const MeetingRoomSchema = SchemaFactory.createForClass(MeetingRoom);
