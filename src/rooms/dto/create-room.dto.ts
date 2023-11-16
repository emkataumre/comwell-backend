import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateRoomDto {
  constructor(
    hotelID: string,
    singleBedAmount: number,
    doubleBedAmount: number,
    hasTV: boolean,
    hasFreeWifi: boolean,
    hasHairDryer: boolean,
    hasRoomServiceAvailable: boolean,
    hasBalcony: boolean,
    isWorkspace: boolean,
  ) {
    this.hotelID = hotelID;
    this.singleBedAmount = singleBedAmount;
    this.doubleBedAmount = doubleBedAmount;
    this.hasTV = hasTV;
    this.hasFreeWifi = hasFreeWifi;
    this.hasHairDryer = hasHairDryer;
    this.hasRoomServiceAvailable = hasRoomServiceAvailable;
    this.hasBalcony = hasBalcony;
    this.isWorkspace = isWorkspace;
  }
  @IsNotEmpty()
  hotelID: string;
  @IsEmail()
  @IsNotEmpty()
  singleBedAmount: number;
  @IsNotEmpty()
  doubleBedAmount: number;
  @IsNotEmpty()
  hasTV: boolean;
  @IsNotEmpty()
  hasFreeWifi: boolean;
  @IsNotEmpty()
  hasHairDryer: boolean;
  @IsNotEmpty()
  hasRoomServiceAvailable: boolean;
  @IsNotEmpty()
  hasBalcony: boolean;
  @IsNotEmpty()
  isWorkspace: boolean;
}
