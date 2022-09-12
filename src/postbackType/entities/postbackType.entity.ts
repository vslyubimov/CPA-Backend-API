import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class PostbackType extends Model<PostbackType> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  type: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
