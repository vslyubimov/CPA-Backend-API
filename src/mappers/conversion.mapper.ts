import { Conversion } from '../conversion/entities/conversion.entity';

type ConversionData = {
  id;
  offer_id;
  pid;
  click_id;
  ua;
  ip;
};

export class ConversionMapper {
  getData(conversion: Conversion): Partial<Conversion> {
    const conversionData: ConversionData = conversion;

    return conversionData;
  }
}
