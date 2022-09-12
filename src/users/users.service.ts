import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
import { User } from './entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UsersService {
  private readonly userRepository = new UserRepository();

  async create(createUserDto: CreateUserDto): Promise<Partial<User>> {
    return UserMapper.toUserInfo(
      await this.userRepository.create(createUserDto),
    );
  }

  async findAll(): Promise<Partial<User>[]> {
    const users = await this.userRepository.getAll();
    const mappedUsers = [];
    for (const user of users) {
      mappedUsers.push(UserMapper.toUserInfo(user));
    }
    return mappedUsers;
  }

  async findOneById(id: number): Promise<Partial<User>> {
    const user = await this.userRepository.getUserById(id);
    if (user) {
      return UserMapper.toUserInfo(user);
    }
    return undefined;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<[affectedCount: number]> {
    return this.userRepository.updateById(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOneById(id);
    if(!user) throw new BadRequestException('there is no such user');
    return this.userRepository.removeById(user);
  }
}
