import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { OfferTypes } from '../internal/enums';
import { OfferRepository } from './offer.repository';

jest.mock('./entities/offer.entity');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('OffersController', () => {
  const offerRepository = new OfferRepository();
  const offersService = new OffersService(offerRepository);
  const offersController = new OffersController(offersService);

  const result = {
    id: 1,
    name: 'name',
    description: 'description',
    type: OfferTypes.CPA,
    cpaPrice: 1,
    rs: 2,
  };

  describe('create', () => {
    it('should return created object', async () => {
      const createOfferDto = {
        name: 'name',
        description: 'description',
        type: OfferTypes.CPA,
        cpaPrice: 1,
        rs: 2,
      };
      jest
        .spyOn(offersService, 'create')
        .mockImplementation(async () => result);
      expect(await offersController.create(createOfferDto)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return offer by id', async () => {
      const id = '1';
      jest
        .spyOn(offersService, 'findById')
        .mockImplementation(async () => result);
      expect(await offersController.findOne(id)).toBe(result);
    });
  });
  //
  describe('findAll', () => {
    it('should return all offers', async () => {
      jest
        .spyOn(offersService, 'findAll')
        .mockImplementation(async () => [result]);
      expect(await offersController.findAll()).toEqual(
        expect.arrayContaining([result]),
      );
    });
  });

  describe('update', () => {
    it('should return updated offer', async () => {
      const id = '1';
      result.cpaPrice = 2;
      jest.spyOn(offersService, 'update').mockImplementation(async () => [1]);
      expect(await offersController.update(id, { cpaPrice: 2 })).toEqual([1]);
    });
  });

  describe('remove', () => {
    it('should return nothing', async () => {
      const id = '1';
      jest
        .spyOn(offersService, 'removeById')
        .mockImplementation(async () => undefined);
      expect(await offersController.remove(id)).toBeUndefined();
    });
  });
});
