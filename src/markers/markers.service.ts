import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marker } from './marker.entity';
import { Repository } from 'typeorm';
import { MarkerDto } from './dto/marker.dto';

@Injectable()
export class MarkersService {
  constructor(
    @InjectRepository(Marker)
    private markersRepository: Repository<Marker>,
  ) {}

  async findAll(): Promise<Marker[]> {
    return await this.markersRepository.find();
  }

  async findOne(id: number): Promise<Marker> {
    const marker = await this.markersRepository.findOneBy({ id: id });
    if (!marker) {
      throw new NotFoundException(`Marker with ID ${id} not found`);
    }
    return marker;
  }

  async create(marker: MarkerDto): Promise<Marker> {
    return await this.markersRepository.save(marker);
  }

  async update(id: number, marker: MarkerDto): Promise<Marker> {
    const result = await this.markersRepository.update(id, marker);
    if (result.affected === 0) {
      throw new NotFoundException(`Marker with ID ${id} not found`);
    }
    return await this.markersRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<void> {
    const result = await this.markersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Marker with ID ${id} not found`);
    }
  }
}
