import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  async getUserById(id: number): Promise<User> {
    return User.findOne({
      rejectOnEmpty: undefined,
      where: {
        id,
      },
    });
  }

  async getUserByName(name: string): Promise<User> {
    return User.findOne({
      where: {
        name,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  async updateById(id: number, user: Partial<User>) {
    return User.update(
      { ...user },
      {
        where: {
          id,
        },
      },
    );
  }

  async removeById(user: Partial<User>) {
    await user.destroy();
  }

  async create({
    name,
    email,
    phoneNumber,
    social,
    balance,
    password,
  }: CreateUserDto): Promise<Partial<User>> {
    return User.create({
      name,
      email,
      phoneNumber,
      social,
      balance,
      password,
    });
  }

  async getAll(): Promise<User[]> {
    return User.findAll();
  }
}
