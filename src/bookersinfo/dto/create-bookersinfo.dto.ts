import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

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
  phone: number;
}
