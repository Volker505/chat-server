import { Module } from '@nestjs/common';
import { ChatSnModule } from './chat-sn/chat-sn.module';
import { ChatDbModule } from './chat-db/chat-db.module';

@Module({
  imports: [ChatSnModule],
})
export class AppModule {}
