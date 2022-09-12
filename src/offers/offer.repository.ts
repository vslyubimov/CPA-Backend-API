import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OfferRepository {
  async create(createOfferDto: Partial<CreateOfferDto>): Promise<Offer> {
    return Offer.create(createOfferDto);
  }

  async findAll(): Promise<Offer[]> {
    return Offer.findAll();
  }

  async findById(id: number): Promise<Offer> {
    return Offer.findByPk(id);
  }

  async updateById(
    id: number,
    updateOfferDto: UpdateOfferDto,
  ): Promise<[affectedCount: number]> {
    return Offer.update(updateOfferDto, {
      where: { id },
    });
  }

  async remove(offer: Partial<Offer>) {
    await offer.destroy();
  }
}
