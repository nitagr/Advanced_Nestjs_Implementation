import { Injectable } from '@nestjs/common';
import { Mongo } from './interface/mongo.interface';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Sample, SampleDocument } from './schema/sample.schema';

@Injectable()
export class MongoService {
  constructor(@InjectModel(Sample.name) private sampleModel: Model<SampleDocument>) { }

  async findAll(): Promise<Mongo[]> {
    return await this.sampleModel.find().exec();
  }

  async create(product: Mongo): Promise<Mongo> {
    const newProduct = new this.sampleModel(product);
    return newProduct.save();
  }

}
