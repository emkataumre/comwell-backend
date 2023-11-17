import { IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  country: string;
  @IsString()
  city: string;
  @IsString()
  address: string;
  @IsNumber()
  phone: number;
  @IsString()
  title: string;

  constructor(
    country: string,
    city: string,
    address: string,
    phone: number,
    title: string,
  ) {
    this.country = country;
    this.city = city;
    this.address = address;
    this.phone = phone;
    this.title = title;
  }
}
