import { BadRequestException, Injectable } from '@nestjs/common';
import { ConversionsRepository } from './conversion.repository';
import { ConversionMapper } from '../mappers/conversion.mapper';
import { Conversion } from './entities/conversion.entity';
import { UpdateConversionDto } from './dto/update-conversion.dto';

@Injectable()
export class ConversionsService {
  constructor(private readonly conversionRepository: ConversionsRepository) {}
  private conversionMapper = new ConversionMapper();

  async findAll(): Promise<Partial<Conversion>[]> {
    const conversions = await this.conversionRepository.findAll();

    const mappedConversions = [];
    for (const conversion of conversions) {
      mappedConversions.push(this.conversionMapper.getData(conversion));
    }
    return mappedConversions;
  }

  async findById(id: number): Promise<Partial<Conversion>> {
    const conversion = await this.conversionRepository.findById(id);
    return this.conversionMapper.getData(conversion);
  }

  async update(
    id: number,
    updateConversionDto: UpdateConversionDto,
  ): Promise<[affectedCount: number]> {
    return await this.conversionRepository.updateById(id, updateConversionDto);
  }

  async removeById(id: number) {
    const conversion = await this.findById(id);
    if (!conversion) {
      throw new BadRequestException('Conversion not found');
    }
    await this.conversionRepository.remove(conversion);
  }
}
