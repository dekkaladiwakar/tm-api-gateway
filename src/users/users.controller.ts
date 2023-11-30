import { Body, Controller, Delete, Get, Post, Query, UseGuards } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { UsersService } from './users.service';
import { CreateUserDTO } from './user.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@User('userID') userID: number) {
    return this.userService.getUserByPK(userID);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete()
  deleteUser(@Query('id') userID: number) {
    return this.userService.deleteUser(userID);
  }
}
