import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
  _id: string;
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  zipCode: number;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
