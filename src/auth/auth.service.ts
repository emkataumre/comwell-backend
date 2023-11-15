import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    console.log(user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.fullName, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const userEmail = await this.usersService.findOneByEmail(
      createUserDto.email,
    );
    if (!userEmail) {
      return this.usersService.create(createUserDto);
    } else {
      console.log('user already exists');
    }
  }
}
