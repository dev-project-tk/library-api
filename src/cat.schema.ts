import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ default: 'point' })
  location: number[];

  @Prop()
  cordinates: number[];
}
const CatSchema = SchemaFactory.createForClass(Cat);
CatSchema.index({ location: '2dsphere' });
export default CatSchema;
