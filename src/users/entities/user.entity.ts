import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phoneNumber: string;

  @Column(DataType.STRING)
  social: string;

  @Column(DataType.DOUBLE)
  balance: number;

  @Column(DataType.STRING)
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
