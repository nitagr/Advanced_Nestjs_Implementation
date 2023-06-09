import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import * as redisStore from 'cache-manager-redis-store';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo/mongo.module';
import { AuthorizationMiddleware } from './app.middleware';

@Module({
  imports: [
    HttpModule,
    // CacheModule.register({
    //   isGlobal: true,
    //   store: redisStore,
    //   host: '127.0.0.1',
    //   port: 6379,
    // }),
    MongoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule  implements NestModule {
  constructor(){}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthorizationMiddleware).forRoutes('app')
  }
}
