import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookerinfoDocument = HydratedDocument<Bookerinfo>;

@Schema()
export class Bookerinfo {
  @Prop({ required: true })
  company: string;

  @Prop()
  optionalDepartment?: string;

  @Prop()
  optionalMeetingName?: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ type: Number })
  phone?: number;

  @Prop()
  comment?: string;
}

export const BookerinfoSchema = SchemaFactory.createForClass(Bookerinfo);
