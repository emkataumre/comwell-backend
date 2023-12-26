import { Test, TestingModule } from '@nestjs/testing';
import { BookersinfoController } from './bookersinfo.controller';
import { BookersinfoService } from './bookersinfo.service';

describe('BookersinfoController', () => {
  let controller: BookersinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookersinfoController],
      providers: [BookersinfoService],
    }).compile();

    controller = module.get<BookersinfoController>(BookersinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
