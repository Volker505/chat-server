import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatSnModule } from './chat-sn/chat-sn.module';
import { ChatDbModule } from './chat-db/chat-db.module';

@Module({
  imports: [ChatSnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
