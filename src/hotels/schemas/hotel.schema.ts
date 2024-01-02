import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Room } from '../../rooms/schemas/room.schema';
import { MeetingRoom } from '../../meetingRooms/schemas/meetingRooms.schema';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop({ required: true })
  country: string;
  @Prop({ required: true })
  picture: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  group: 'Zealand' | 'Funen' | 'Jutland';
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  title: string;

  @Prop([Room])
  rooms: Room[];

  @Prop([MeetingRoom])
  meetingRooms: MeetingRoom[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
