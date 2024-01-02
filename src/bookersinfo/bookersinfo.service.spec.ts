import { Test, TestingModule } from '@nestjs/testing';
import { BookersinfoService } from './bookersinfo.service';

describe('BookersinfoService', () => {
  let service: BookersinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookersinfoService],
    }).compile();

    service = module.get<BookersinfoService>(BookersinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
