import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateGuestUserDto {
  constructor(fullName: string, email: string, phone: number, _id: string) {
    this._id = _id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
  }
  _id: string;
  @IsNotEmpty()
  fullName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  phone: number;
}
