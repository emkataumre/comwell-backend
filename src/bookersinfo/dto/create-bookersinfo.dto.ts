import { IsNotEmpty, IsOptional, IsEmail, IsString } from 'class-validator';

export class CreateBookerinfoDto {
  constructor(
    company: string,
    fullName: string,
    email: string,
    phone: string,
    optionalDepartment?: string,
    optionalMeetingName?: string,
    comment?: string,
  ) {
    this.company = company;
    this.optionalDepartment = optionalDepartment;
    this.optionalMeetingName = optionalMeetingName;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.comment = comment;
  }

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
  @IsString()
  phone: string;

  @IsOptional()
  comment: string;
}
