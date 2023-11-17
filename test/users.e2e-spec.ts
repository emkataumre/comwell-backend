import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TestModule } from '../src/test.module';
import { UsersService } from '../src/users/users.service';
import { ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../src/users/dto/create-user.dto';
import * as request from 'supertest';
import { SignInDto } from '../src/auth/dto/signIn.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    usersService = moduleFixture.get(UsersService);
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await usersService.removeAll();
  });

  describe('GET users', () => {
    it('get me all available users', async () => {
      //ARRANGE
      const newUser = new CreateUserDto(
        'Emil The SmartPants',
        'emil@gmail.com',
        10,
        1,
        'password',
      );
      const response = await request(app.getHttpServer())
        .post('/users')
        .send(newUser)
        .expect(201);
      //ACT
      const users = usersService.findAll();
      //ASSERT
      const result = response.body;
      expect(result._id.toString()).toBeDefined();
    });
  });

  describe('POST auth', () => {
    it('should perform a valid sign up action', async () => {
      //ARRANGE - create a valid user
      const user = new CreateUserDto(
        'emil',
        'emo.vladinov@gmail.com',
        3481,
        14379481,
        'supersecret',
      );
      //ACT - post the user to auth/signup
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(201);
      const result = response.body;
      //ASSERT - check if the user exists in the database
      expect(result._id.toString()).toBeDefined();
    });
    it('should perform and invalid sign up action', async () => {
      //ARANGE - create and post a user
      const user = new CreateUserDto(
        'emil',
        'emo.vladinov@gmail.com',
        3481,
        14379481,
        'supersecret',
      );
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(201);
      //ACT - try to post the same user
      const responseError = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(400);
      //ASSERT - be sad because it failed
      const result = response.body;
      const resultError = response.body;
      const getResponse = await request(app.getHttpServer()).get('/users');

      expect(result._id.toString()).toBeDefined();
      expect(getResponse.body.length === 1);
    });
    it('should perform a valid signin action', async () => {
      //ARRAGE - create and post a user
      const user = new CreateUserDto(
        'emil',
        'emo.vladinov@gmail.com',
        3481,
        14379481,
        'supersecret',
      );
      const userSignIn = new SignInDto('emo.vladinov@gmail.com', 'supersecret');
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(201);
      //ACT - perform a singin action
      const responseSignIn = await request(app.getHttpServer())
        .post('/auth/login')
        .send(userSignIn)
        .expect(200);
      //ASSERT - email and pass in body should be the same as the ones in the database :)))
      expect(user.email).toEqual(userSignIn.email);
      expect(user.password).toEqual(userSignIn.password);
    });
    it('should perform and invalid signin action', async () => {
      const user = new CreateUserDto(
        'emil',
        'emo.vladinov@gmail.com',
        3481,
        14379481,
        'supersecret',
      );
      const userSignIn = new SignInDto(
        'emo.vladinov1@gmail.com',
        'everyoneknowsit',
      );
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(201);
      //ACT - perform a singin action
      const responseSignIn = await request(app.getHttpServer())
        .post('/auth/login')
        .send(userSignIn)
        .expect(500);
      //ASSERT - email and pass in body should be the same as the ones in the database :)))
      expect(user.email).not.toEqual(userSignIn.email);
      expect(user.password).not.toEqual(userSignIn.password);
    });
  });
});
