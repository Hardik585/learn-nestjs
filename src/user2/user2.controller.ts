import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User2Service } from './user2.service';
import { user } from './DTO/userDemo';

@Controller('user2')
export class User2Controller {
  constructor(private user2Service: User2Service) {}

  @Get('/:userId')
  getUser2(@Param() params: { userId: number}) {
    return this.user2Service.getUser2(params.userId);
  }
  @Get()
  getUsers2() {
    return this.user2Service.getUsers2();
  }
  @Post()
  createUser2(@Body() newUser: user) {
    return this.user2Service.createUser2(newUser);
  }
  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.user2Service.deleteUser2(params.userId);
  }
  @Put('/:userId')
  updateUser(@Body() user: user, @Param() params: { userId: number }) {
    return this.user2Service.updateUsers2(user, params.userId);
  }
}
