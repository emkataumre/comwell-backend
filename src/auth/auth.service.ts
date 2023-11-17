import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { SignInResponse } from './dto/signInResponse';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<SignInResponse> {
    const user = await this.usersService.findOneByEmail(email);
    console.log(user);

    if (!(await bcrypt.compare(pass, user?.password))) {
      throw new UnauthorizedException();
    }
    if (email !== user.email) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }
    //payload=what will be inside of the token
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
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
  }
}
