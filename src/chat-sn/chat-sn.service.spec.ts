import { Test, TestingModule } from '@nestjs/testing';
import { ChatSnService } from './chat-sn.service';

describe('ChatSnService', () => {
  let service: ChatSnService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatSnService],
    }).compile();
    service = module.get<ChatSnService>(ChatSnService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
