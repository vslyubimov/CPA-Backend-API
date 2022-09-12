import { Injectable } from '@nestjs/common';
import { UpdateConversionDto } from './dto/update-conversion.dto';
import { Conversion } from './entities/conversion.entity';
import { CreateConversionDto } from './dto/create-conversion.dto';

@Injectable()
export class ConversionsRepository {
  async create({
    offer_id,
    pid,
    click_id,
    ua,
    ip,
  }: CreateConversionDto): Promise<Conversion> {
    return Conversion.create({
      offer_id,
      pid,
      click_id,
      ua,
      ip,
    });
  }

  async findAll(): Promise<Conversion[]> {
    return Conversion.findAll();
  }

  async findById(id: number): Promise<Conversion> {
    return Conversion.findByPk(id);
  }

  async updateById(
    id: number,
    updateConversionDto: UpdateConversionDto,
  ): Promise<[affectedCount: number]> {
    return Conversion.update(updateConversionDto, {
      where: { id },
    });
  }

  async remove(conversion: Partial<Conversion>) {
    await conversion.destroy();
  }
}
