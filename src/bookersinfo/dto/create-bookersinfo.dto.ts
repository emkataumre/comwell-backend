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
  phone: string;
}
