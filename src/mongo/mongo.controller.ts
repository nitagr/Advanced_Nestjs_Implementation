import { Controller, Get, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { Mongo } from './interface/mongo.interface';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) { }

  @Get()
  async findAll(): Promise<Mongo[]> {
    return this.mongoService.findAll();
  }

  @Post('create')
  async createProduct(@Res() response, @Body() product: Mongo) {
    const newProduct = await this.mongoService.create(product);
    return response.status(HttpStatus.CREATED).json({
      newProduct
    })
  }
}
