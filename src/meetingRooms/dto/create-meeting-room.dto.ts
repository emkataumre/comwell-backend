import { IsString, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMeetingRoomDto {
  @IsNumber()
  @IsNotEmpty()
  maxCapacity: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  bulletPoints: string[];
}
