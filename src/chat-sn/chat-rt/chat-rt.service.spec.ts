import { Test, TestingModule } from '@nestjs/testing';
import { ChatRtService } from './chat-rt.service';

describe('ChatRtService', () => {
  let service: ChatRtService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatRtService],
    }).compile();
    service = module.get<ChatRtService>(ChatRtService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
