import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Offer } from '../../offers/entities/offer.entity';
import { User } from '../../users/entities/user.entity';

@Table({ tableName: 'Conversions' })
export class Conversion extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Offer)
  @Column
  offer_id: number;

  @ForeignKey(() => User)
  @Column
  pid: number;

  @Column
  click_id: string;

  @Column
  ua: string;

  @Column
  ip: string;
}
