import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

enum Amenity {
  Tv = 'TV',
  Hairdryer = 'HAIRDRYER',
  Workspace = 'WORKSPACE',
  Roomservice = 'ROOMSERVICE',
  Iron = 'IRON',
  Wifi = 'WIFI',
}

@Schema()
export class Amenities {
  @Prop({ type: [String], enum: Object.values(Amenity) })
  amenities: Amenity[];
}

export const AmenitiesSchema = SchemaFactory.createForClass(Amenities);
