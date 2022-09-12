import { User } from '../users/entities/user.entity';

export class UserMapper {
  static toUserInfo(user: Partial<User>): {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    social: string;
    balance: number;
  } {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      social: user.social,
      balance: user.balance,
    };
  }
}
