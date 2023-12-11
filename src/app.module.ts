import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import CatSchema from './cat.schema';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/', {
      user: 'root',
      pass: 'example',
      dbName: 'library',
      w: 'majority',
      retryWrites: true,
    }),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  providers: [CatService],
  controllers: [CatController],
})
export class AppModule { }
