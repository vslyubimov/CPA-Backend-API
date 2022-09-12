import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as dotenv from 'dotenv';
dotenv.config();

jest.mock('./entities/user.entity');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('UsersController', () => {
  const usersService = new UsersService();
  const usersController = new UsersController(usersService);

  describe('Should work by Controller', () => {
    it('CREATE, REMOVE', async () => {
      const user = new CreateUserDto();
      user.name = 'John';
      user.email = 'ddoser@gmail.com';
      user.password = 'ddos';
      const result = { id: 1, name: 'John', email: 'ddoser@gmail.com' };
      jest.spyOn(usersService, 'create').mockImplementation(async () => result);
      expect(await usersController.create(user)).toBe(result);
      expect(await usersController.remove(1)).toBe(undefined);
    });

    it('FIND ALL', async () => {
      const result = [];
      jest
        .spyOn(usersService, 'findAll')
        .mockImplementation(async () => result);

      expect(await usersController.findAll()).toBe(result);
    });

    it('FIND ONE', async () => {
      const result = { id: 1, name: 'John', email: 'ddoser@gmail.com' };
      jest
        .spyOn(usersService, 'findOneById')
        .mockImplementation(async () => result);

      expect(await usersController.findOne(1)).toBe(result);
    });

    it('UPDATE', async () => {
      const update = { name: 'Cringe' };
      jest.spyOn(usersService, 'update').mockImplementation(async () => [1]);

      expect(await usersController.update(1, update)).toEqual([1]);
    });
  });
});
