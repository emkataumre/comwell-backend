import { IsNotEmpty, IsEmail } from 'class-validator';
export class CreateGuestUserDto {
  constructor(fullName: string, email: string, phone: number) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
  }
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  phone: number;
}
