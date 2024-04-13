import { Injectable } from '@nestjs/common';
import { createUserDTO } from './DTO/createUser';

@Injectable()
export class userService {


  createUser(createUser:createUserDTO) {
    return createUser;
  }

  getUser(userId: number) {
    return userId;
  }

  getUsers() {
    return 'Collection of User';
  }

  updateUser(user:createUserDTO, userId: number) {
    return { msg: user, id: userId };
  }

  deleteUser(userId: number) {
    return userId;
  }
}
