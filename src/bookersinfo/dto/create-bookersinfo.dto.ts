import {
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookerinfoDto {
  @IsNotEmpty()
  company: string;

  @IsOptional()
  optionalDepartment: string;

  @IsOptional()
  optionalMeetingName: string;

  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Transform((value) =>
    value === null || value === undefined ? null : Number(value),
  )
  @IsPhoneNumber(null, { message: 'Invalid phone number' })
  phone: number;
}
