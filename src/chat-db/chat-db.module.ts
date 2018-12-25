import { Module } from '@nestjs/common';
import { databaseProviders } from './chat-db.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class ChatDbModule {}
