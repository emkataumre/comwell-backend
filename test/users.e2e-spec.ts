import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { TestModule } from '../src/test.module';
import { UsersService } from '../src/users/users.service';
import { ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../src/users/dto/create-user.dto';
import * as request from 'supertest';

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
      const response = await request(app.getHttpServer)
        .post('/users')
        .send(newUser)
        .expect(201);
      //ACT
      const users = usersService.findAll();
      console.log(users);
      //ASSERT
      const result = response.body;
      expect(result[0]._id).toBeDefined();
    });
  });
});
