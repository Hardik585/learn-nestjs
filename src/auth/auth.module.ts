import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User2Service } from 'src/user2/user2.service';
import { User2Module } from 'src/user2/user2.module';

@Module({
  imports:[User2Module],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
