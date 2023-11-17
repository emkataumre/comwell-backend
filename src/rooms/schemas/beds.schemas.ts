import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Beds {
  @Prop({ required: true })
  double: number;

  @Prop({ required: true })
  single: number;
}

export const BedsSchema = SchemaFactory.createForClass(Beds);
