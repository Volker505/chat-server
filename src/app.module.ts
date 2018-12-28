import { Module } from '@nestjs/common';
import { ChatSnModule } from './chat-sn/chat-sn.module';
import { ChatRtModule } from './chat-sn/chat-rt/chat-rt.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/chat'),
    ChatSnModule,
    ChatRtModule
  ],
})
export class AppModule {}
