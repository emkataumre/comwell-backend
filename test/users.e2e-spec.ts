import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TestModule } from '../src/test.module';
import { UsersService } from '../src/users/users.service';
import { ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AuthService } from '../src/auth/auth.service';
import { CreateUserDto } from '../src/users/dto/create-user.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;
  let authService: AuthService;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    usersService = moduleFixture.get(UsersService);
    authService = moduleFixture.get(AuthService);
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await usersService.removeAll();
  });

  describe('GET users', () => {
    it('get me all available users', async () => {
      const newUser = new CreateUserDto(
        'Emil The SmartPants',
        'emil@gmail.com',
        10,
        '1',
        'password',
      );
      const response = await request(app.getHttpServer())
        .post('/users')
        .send(newUser)
        .expect(201);
      const users = usersService.findAll();
      const result = response.body;
      expect(result._id.toString()).toBeDefined();
    });
  });

  describe('POST a new user', () => {
    it('creates a new user', async () => {
      const newUser = new CreateUserDto(
        'Emil The SmartPants',
        'emil@gmail.com',
        10,
        '1',
        'password',
      );
      const signUpResponse = await authService.signUp(newUser);
      expect(signUpResponse.access_token).toBeDefined();
    });
  });

  // describe('log in a user', () => {
  //   it('logs in an existing user', async () => {
  //     const newUser = new CreateUserDto(
  //       'Emil The SmartPants',
  //       'emil1@gmail.com',
  //       10,
  //       '1',
  //       'password',
  //     );
  //     await authService.signUp(newUser);
  //     const signInResponse = await authService.signIn(
  //       'emil1@gmail.com',
  //       'password',
  //     );

  //     expect(signInResponse.access_token).toBeDefined();
  //   });
  // });
});
