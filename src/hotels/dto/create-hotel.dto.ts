import { IsNotEmpty, IsString } from 'class-validator';
export class CreateHotelDto {
  constructor(
    country: string,
    city: string,
    address: string,
    phone: string,
    title: string,
  ) {
    this.country = country;
    this.city = city;
    this.address = address;
    this.phone = phone;
    this.title = title;
  }
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  @IsString()
  title: string;
}
