import { IsNotEmpty } from 'class-validator';
export class CreateHotelDto {
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
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phone: number;
  @IsNotEmpty()
  title: string;
}
