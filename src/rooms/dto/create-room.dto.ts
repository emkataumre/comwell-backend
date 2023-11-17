import { IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
  singleBedAmount: number;

  @IsNumber()
  doubleBedAmount: number;

  @IsBoolean()
  hasTv: boolean;

  @IsBoolean()
  hasFreeWifi: boolean;

  @IsBoolean()
  hasHairDryer: boolean;

  @IsBoolean()
  hasRoomServiceAvailable: boolean;

  @IsBoolean()
  hasBalcony: boolean;

  @IsBoolean()
  isWorkspace: boolean;

  constructor(
    singleBedAmount: number,
    doubleBedAmount: number,
    hasTv: boolean,
    hasFreeWifi: boolean,
    hasHairDryer: boolean,
    hasRoomServiceAvailable: boolean,
    hasBalcony: boolean,
    isWorkspace: boolean,
  ) {
    this.singleBedAmount = singleBedAmount;
    this.doubleBedAmount = doubleBedAmount;
    this.hasTv = hasTv;
    this.hasFreeWifi = hasFreeWifi;
    this.hasHairDryer = hasHairDryer;
    this.hasRoomServiceAvailable = hasRoomServiceAvailable;
    this.hasBalcony = hasBalcony;
    this.isWorkspace = isWorkspace;
  }
}
