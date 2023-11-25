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
import { SignUpResponse } from './dto/signUpResponse';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async signIn(email: string, pass: string): Promise<SignInResponse> {
    const user = await this.usersService.findOneByEmail(email);

    if (!(await bcrypt.compare(pass, user?.password))) {
      throw new UnauthorizedException();
    }
    //Payload: The data that the token contains
    const payload = {
      sub: user.fullName,
      email: user.email,
      phone: user.phone,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto): Promise<SignUpResponse> {
    const userEmail = await this.usersService.findOneByEmail(
      createUserDto.email,
    );
    if (userEmail) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    } else {
      //Payload: The data that the token contains
      const payload = {
        sub: createUserDto.fullName,
        email: createUserDto.email,
        phone: createUserDto.phone,
        zipCode: createUserDto.zipCode,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
