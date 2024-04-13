import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from 'src/user2/DTO/userDemo';
import { User2Service } from 'src/user2/user2.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: User2Service,
    private jwtService: JwtService,
  ) {}

  async logIn(user:user):Promise<user | string> {
    const existingUser = await this.userService.getUserByEmail(user.email);
  }
}
