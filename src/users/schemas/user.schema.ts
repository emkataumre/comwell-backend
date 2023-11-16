import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  zipCode: number;
  @Prop({ required: true })
  phone: number;
  @Prop({ required: true })
  password: string;

  // Add a method to hash the password before saving
  async hashPassword(): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    return hashedPassword;

    // const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(this.password, salt);
    // this.password = hashPassword;
    // const newUser = new this.userModel(user);
    // return newUser.save();

    // return (this.password = await bcrypt.hash(this.password, 10));
  }

  // Compare a password with its hash
  // async comparePasswords(
  //   plainPassword: string,
  //   hashedPassword: string,
  // ): Promise<boolean> {
  //   return bcrypt.compare(plainPassword, hashedPassword);
  // }
}

export const UserSchema = SchemaFactory.createForClass(User);
