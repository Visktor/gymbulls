import { User } from '#/database/entities/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserBody } from './dto/createBody';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}
  getAll(opts: { take: number; skip: number }) {
    return this.usersRepo.find({
      ...opts,
    });
  }

  create(data: CreateUserBody) {
    return this.usersRepo.insert(data);
  }

  getOne(id: number) {
    return this.usersRepo.findOneBy({
      id,
    });
  }
}
