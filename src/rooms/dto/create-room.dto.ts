import { IsString, IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { Amenity } from '../schemas/room.schema';

class BedsDto {
  @IsNumber()
  @IsNotEmpty()
  double: number;

  @IsNumber()
  @IsNotEmpty()
  single: number;
}

class AmenitiesDto {
  @IsArray()
  @IsNotEmpty()
  @Type(() => String)
  amenities: Amenity[];
}

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  pictures: string[];

  @Type(() => BedsDto)
  beds: BedsDto;

  @Type(() => AmenitiesDto)
  amenities: AmenitiesDto;
}
