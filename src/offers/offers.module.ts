import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { OfferRepository } from './offer.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Offer } from './entities/offer.entity';

@Module({
  controllers: [OffersController],
  providers: [OffersService, OfferRepository],
  imports: [SequelizeModule.forFeature([Offer])],
})
export class OffersModule {}
