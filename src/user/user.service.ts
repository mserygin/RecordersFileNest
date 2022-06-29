import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await getManager().query('SELECT * FROM "user"');
  }
}
