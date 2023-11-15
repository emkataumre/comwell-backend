import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  constructor(
    fullName: string,
    email: string,
    zipCode: number,
    phone: number,
    password: string,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.zipCode = zipCode;
    this.phone = phone;
    this.password = password;
  }
  @IsNotEmpty()
  fullName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  zipCode: number;
  @IsNotEmpty()
  phone: number;
  @IsNotEmpty()
  password: string;
}
