import { UsersService } from './users.service';
import * as dotenv from 'dotenv';
import { CreateUserDto } from './dto/create-user.dto';
import { Sequelize } from 'sequelize-typescript';
import { User } from './entities/user.entity';
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB,
});

sequelize.addModels([User]);

describe('Should work by Service and DataMapper', () => {
  const usersService = new UsersService();

  it('CREATE REMOVE', async () => {
    const user = new CreateUserDto();
    user.name = 'John';
    user.email = 'ddoser@gmail.com';
    user.password = 'ddos';
    console.log(await usersService.create(user));
  });

  it('FIND ONE', async () => {
    expect(await usersService.findOneById(2)).toHaveProperty(['name']);
  });

  it('FIND ALL', async () => {
    expect((await usersService.findAll()).length).toBeGreaterThan(3);
  });

  it('UPDATE', async () => {
    expect(await usersService.update(1, { name: 'CRINGE' })).toEqual([1]);
  });
});
