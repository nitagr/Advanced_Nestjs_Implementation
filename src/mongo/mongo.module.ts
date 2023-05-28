import { Module } from '@nestjs/common';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sample, SampleSchema } from './schema/sample.schema';

@Module({
  controllers: [MongoController],
  providers: [MongoService],
  imports: [
    MongooseModule.forFeature([{ name: Sample.name, schema: SampleSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/nestapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class MongoModule {}
