import { Offer } from 'src/offers/entities/offer.entity';

type OfferData = {
  id;
  name;
  description;
  type;
  cpaPrice;
  rs;
};

export class OfferMapper {
  getData(offers: Offer[]): Partial<Offer>[] {
    const result = [];

    for (const offer of offers) {
      const offerData: OfferData = offer;
      result.push(offerData);
    }

    return result;
  }
}
