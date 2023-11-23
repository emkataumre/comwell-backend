import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GuestUserDocument = HydratedDocument<GuestUser>;

@Schema()
export class GuestUser {
  @Prop()
  //_id: string;
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  phone: number;
}
export const GuestUserSchema = SchemaFactory.createForClass(GuestUser);
