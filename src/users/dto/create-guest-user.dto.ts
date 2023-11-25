import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateGuestUserDto {
  customerInfo: {
    _id: string;
    fullName: string;
    email: string;
    phone: number;
  };
}
