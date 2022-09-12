import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Offer } from '../../offers/entities/offer.entity';
import { User } from '../../users/entities/user.entity';
import { PostbackType } from '../../postbackType/entities/postbackType.entity';

@Table
export class Postback extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => PostbackType)
  @Column
  postback_type: number;

  @Column
  click_id: string;

  @ForeignKey(() => Offer)
  @Column
  offer_id: number;

  @ForeignKey(() => User)
  @Column
  pid: number;

  @Column(DataType.FLOAT)
  base: number;

  @Column(DataType.FLOAT)
  deposit: number;

  @Column(DataType.FLOAT)
  ngr: number;

  @Column
  ip: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
