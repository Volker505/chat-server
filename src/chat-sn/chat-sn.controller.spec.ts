import { Test, TestingModule } from '@nestjs/testing';
import { ChatSnController } from './chat-sn.controller';

describe('ChatSn Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ChatSnController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ChatSnController = module.get<ChatSnController>(ChatSnController);
    expect(controller).toBeDefined();
  });
});
