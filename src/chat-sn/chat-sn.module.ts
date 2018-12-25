import { Module } from '@nestjs/common';
import { ChatSnController } from './chat-sn.controller';
import { ChatSnService } from './chat-sn.service';
import { ChatDbModule } from '../chat-db/chat-db.module';
import { ChatSnProviders } from './chat-sn.provider';

@Module({
  imports: [ChatDbModule],
  controllers: [ChatSnController],
  providers: [ ChatSnService ],
  components: [ ...ChatSnProviders ]//deprecated
})
export class ChatSnModule {}
