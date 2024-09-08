import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MarkersService } from './markers.service';
import { MarkerDto } from './dto/marker.dto';

@Controller('markers')
export class MarkersController {
  constructor(private markersService: MarkersService) {}

  @Get()
  async findAll() {
    return this.markersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.markersService.findOne(id);
  }

  @Post()
  async create(@Body() createMarkerDto: MarkerDto) {
    return this.markersService.create(createMarkerDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateMarkerDto: MarkerDto) {
    return this.markersService.update(id, updateMarkerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.markersService.delete(id);
  }
}
