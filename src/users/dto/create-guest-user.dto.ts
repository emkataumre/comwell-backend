import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
export class CreateGuestUserDto {
  constructor(fullName: string, email: string, phone: string) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
  }
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
}
