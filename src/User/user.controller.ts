import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { userService } from './user.service';
import { createUserDTO } from './DTO/createUser';

@Controller('/user')
export class UserController {
  constructor(private userService: userService) {}

  @Get('/:id')
  getUser(@Param() params: { id: number }) {
    return 'I am From user Class  ' + params.id;
  }

  @Post()
  createUser(@Body() body:createUserDTO) {
    return this.userService.createUser(body);
  }

  @Put('/:id')
  updateUser(@Body() body:createUserDTO, @Param() params: { id: number }) {
    return this.userService.updateUser(body, params.id);
  }

  @Delete(':id')
  deleteUser(@Param() params: { id: number }) {
    return this.userService.deleteUser(params.id);
  }

  @Get()
  getAllUser() {
    return this.userService.getUsers();
  }
}
