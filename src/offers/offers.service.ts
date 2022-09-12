import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { OfferRepository } from './offer.repository';
import { OfferMapper } from '../mappers/offer.mapper';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(private readonly offerRepository: OfferRepository) {}
  private offerMapper = new OfferMapper();

  async create(createOfferDto: CreateOfferDto): Promise<Partial<Offer>> {
    const offer = await this.offerRepository.create(createOfferDto);
    return this.offerMapper.getData([offer])[0];
  }

  async findAll(): Promise<Partial<Offer>[]> {
    const offers = await this.offerRepository.findAll();
    return this.offerMapper.getData(offers);
  }

  async findById(id: number): Promise<Partial<Offer>> {
    const offer = await this.offerRepository.findById(id);
    return this.offerMapper.getData([offer])[0];
  }

  async update(
    id: number,
    updateOfferDto: UpdateOfferDto,
  ): Promise<[affectedCount: number]> {
    return await this.offerRepository.updateById(id, updateOfferDto);
  }

  async removeById(id: number) {
    const offer = await this.findById(id);
    if (!offer) {
      throw new BadRequestException('Offer not found');
    }
    await this.offerRepository.remove(offer);
  }
}
