import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  constructor(
    fullName: string,
    email: string,
    zipCode: string,
    phone: string,
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
  zipCode: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  password: string;
}
