import { Module } from '@nestjs/common';
import { ChatSnController } from './chat-sn.controller';
import { ChatSnService } from './chat-sn.service';
import { ChatSnProviders } from './chat-sn.provider';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([...ChatSnProviders])
  ],
  controllers: [ChatSnController],
  providers: [ ChatSnService ],
})
export class ChatSnModule {}
