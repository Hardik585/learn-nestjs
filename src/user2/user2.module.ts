import { Module } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  exports:[User2Service],
  providers: [User2Service],
  controllers: [User2Controller]
})
export class User2Module {}
