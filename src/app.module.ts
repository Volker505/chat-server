import { Module } from '@nestjs/common';
import { ChatSnModule } from './chat-sn/chat-sn.module';
import { ChatDbModule } from './chat-db/chat-db.module';
import { ChatRtModule } from './chat-sn/chat-rt/chat-rt.module';

@Module({
  imports: [ChatSnModule, ChatRtModule],
})
export class AppModule {}
