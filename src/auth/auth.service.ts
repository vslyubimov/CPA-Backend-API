import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../users/entities/user.entity';

import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UserRepository } from '../users/users.repository';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class AuthService {
  private readonly userRepository: UserRepository;
  private readonly jwtService: JwtService;

  constructor(userRepository: UserRepository, jwtService: JwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async register(user: CreateUserDto): Promise<Partial<User> | any> {
    const userBd = await this.userRepository.getUserByName(user.name);
    if (userBd) {
      throw new BadRequestException('Already registered');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    let createdUser = await this.userRepository.create({
      name: user.name,
      email: user.email,
      password: hashedPassword,
      phoneNumber: user.phoneNumber,
      social: user.social,
      balance: user.balance,
    });
    if (!createdUser) {
      throw new InternalServerErrorException('Invalid create');
    }
    createdUser = UserMapper.toUserInfo(createdUser);
    const payload = { username: createdUser.name, sub: createdUser.id };
    return {
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    };
  }

  async login(user: LoginUserDto) {
    const { name, email, password } = user;
    const userBd = name
      ? await this.userRepository.getUserByName(name)
      : await this.userRepository.getUserByEmail(email);
    if (!userBd) {
      throw new UnauthorizedException();
    }
    const payload = { username: userBd.password, sub: userBd.id };
    const hashedPasswordBd = userBd.password;
    const isMatch = await bcrypt.compare(password, hashedPasswordBd);
    if (isMatch) {
      return {
        access_token: 'Bearer ' + this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException();
  }
}
