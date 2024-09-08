import { Module } from '@nestjs/common';
import { MarkersController } from './markers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marker } from './marker.entity';
import { MarkersService } from './markers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Marker])],
  controllers: [MarkersController],
  providers: [MarkersService],
})
export class MarkersModule {}
