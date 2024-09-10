import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkersModule } from './markers/markers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'markers.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    MarkersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
