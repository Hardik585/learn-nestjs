import { Injectable } from '@nestjs/common';
import { user } from './DTO/userDemo';
import { UserEntity } from './entity/user.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';

@Injectable()
export class User2Service {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async getUser2(userId: number): Promise<user | null> {
    return await this.userRepo.findOne({ where: { id: userId } });
  }

  async getUsers2(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  async createUser2(user: user): Promise<user> {
    return await this.userRepo.save(user);
  }

  async updateUsers2(user: user, userId: number): Promise<user | string> {
    const isUserExist = await this.getUser2(userId);
    if (isUserExist) {
      Object.assign(isUserExist, user);
      return await this.userRepo.save(isUserExist);
    }
    return 'User Not Existing';
  }

  async deleteUser2(userId: number): Promise<user> {
    const userToBeDeleted = await this.getUser2(userId);
    if (userToBeDeleted) {
      await this.userRepo.delete(userId);
    }
    return userToBeDeleted;
  }

  async getUser2ByEmail(userEmail: string): Promise<user> {
    const existingUser = await this.userRepo.findOne({
      where: { email: userEmail },
    });
    if (existingUser) {
      return existingUser;
    }
  }
}
