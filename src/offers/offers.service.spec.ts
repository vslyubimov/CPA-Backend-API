import { OffersService } from './offers.service';
import { OfferRepository } from './offer.repository';
import { OfferTypes } from '../internal/enums';
import { Offer } from './entities/offer.entity';
import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB,
});

sequelize.addModels([Offer]);

describe('OffersService', () => {
  const offerRepository = new OfferRepository();
  const offersService = new OffersService(offerRepository);
  let firstOffer;

  beforeEach(async () => {
    firstOffer = {
      name: 'offer_1',
      description: 'description',
      type: OfferTypes.CPA,
      cpaPrice: 1,
      rs: 2,
    };
  });

  describe('create, remove', () => {
    it('should return created object', async () => {
      const createOfferDto = {
        name: 'create',
        description: 'description',
        type: OfferTypes.CPA,
        cpaPrice: 1,
        rs: 2,
      };
      const id = 2;
      expect(await offersService.create(createOfferDto)).toHaveProperty(
        'name',
        'create',
      );
      expect(await offersService.removeById(id)).toBeUndefined();
    });
  });

  describe('findOne', () => {
    it('should return offer by id', async () => {
      const id = 1;
      expect(await offersService.findById(id)).toHaveProperty('name', 'create');
    });
  });

  describe('findAll', () => {
    it('should return all offers', async () => {
      expect((await offersService.findAll()).length).toBeGreaterThan(3);
    });
  });

  describe('update', () => {
    it('should return updated offer', async () => {
      const id = 1;
      // expect(await offersService.update(id, { cpaPrice: 2 })).toHaveProperty(
      //   'cpaPrice',
      //   2,
      // );
      expect(await offersService.update(id, { cpaPrice: 2 })).toEqual([1]);
    });
  });
});
