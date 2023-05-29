import { Controller, Get, UseInterceptors, CacheTTL, Param} from '@nestjs/common';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager'
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly service: AppService) {}

  // @UseInterceptors(CacheInterceptor) 
  // @CacheKey('test-cache')
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    return await this.service.getPokemon(+id);
  }
}
