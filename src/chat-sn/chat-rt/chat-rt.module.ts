import { Module } from '@nestjs/common';
import { ChatGeteway } from './chat.geteway';
import { ChatSnProviders } from '../chat-sn.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatWsModule } from '../../chat-ws/chat-ws.module';


@Module({
  imports: [ MongooseModule.forFeature([...ChatSnProviders]), ChatWsModule],
  providers: [ChatGeteway]
})
export class ChatRtModule {}
