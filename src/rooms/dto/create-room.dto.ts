import {
  IsString,
  IsArray,
  IsInt,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Amenity } from '../schemas/room.schema';

class BedsDto {
  @IsInt()
  @IsNotEmpty()
  double: number;

  @IsInt()
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
  @ValidateNested()
  beds: BedsDto;

  @Type(() => AmenitiesDto)
  // @ValidateNested()
  amenities: AmenitiesDto;
}
