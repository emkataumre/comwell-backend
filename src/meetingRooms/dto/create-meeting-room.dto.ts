import { IsString, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMeetingRoomDto {
  constructor(
    maxCapacity: number,
    description: string,
    bulletPoints: string[],
    picture: string,
  ) {
    this.maxCapacity = maxCapacity;
    this.description = description;
    this.bulletPoints = bulletPoints;
    this.picture = picture;
  }
  @IsNumber()
  @IsNotEmpty()
  maxCapacity: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  bulletPoints: string[];

  @IsString()
  @IsNotEmpty()
  picture: string;
}
