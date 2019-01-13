import { Module } from '@nestjs/common';
import { ChatGeteway } from './chat.geteway';
import { ChatRtService } from './chat-rt.service';
import { ChatSnProviders } from '../chat-sn.provider';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ MongooseModule.forFeature([...ChatSnProviders])],
  providers:[ChatGeteway, ChatRtService]
})
export class ChatRtModule {}
