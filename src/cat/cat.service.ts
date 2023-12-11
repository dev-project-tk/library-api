import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from 'src/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }

  async save(body) {
    const cat = await this.catModel.create(body);

    return await cat.save();
  }

  async find() {
    const cat = await this.catModel
      .aggregate([
        {
          $geoNear: {
            near: { type: 'Point', coordinates: [-73.99279, 40.719296] },
            distanceField: 'dist.calculated',
            minDistance: 2,
            query: { name: 'pew pew' },
            includeLocs: 'dist.location',
            spherical: true,
          },
        },
      ])
      .exec();

    return cat;
  }
}
