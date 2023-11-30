import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly httpService: HttpService,
  ) {}
  async getUserByPK(userID: number) {
    const response = await firstValueFrom(this.httpService.get(`http://localhost:3001/api/v1/users/${userID}`));
    return response.data;
  }

  async createUser(createUserDto: CreateUserDTO) {
    const response = await firstValueFrom(this.httpService.post('http://localhost:3001/api/v1/users', createUserDto));
    return response.data;
  }

  async deleteUser(userID: number) {
    const response = await firstValueFrom(this.httpService.delete(`http://localhost:3001/api/v1/users/${userID}`));
    return response.data;
  }
}
