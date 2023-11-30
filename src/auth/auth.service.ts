import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(username: string, userID: number): Promise<any> {
    const user = await this.userService.getUserByPK(userID);

    // TODO: Use a proper hashing comparison
    if (user && user.username === username) { 
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, email: user.email, type: user.type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
