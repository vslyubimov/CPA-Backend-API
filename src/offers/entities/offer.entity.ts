import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { OfferTypes } from '../../internal/enums';

@Table({ tableName: 'Offers' })
export class Offer extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  type: OfferTypes;

  @Column(DataType.FLOAT)
  cpaPrice: number;

  @Column(DataType.FLOAT)
  rs: number;
}
