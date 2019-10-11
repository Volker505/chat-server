import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/websockets';
// import { WsAdapter } from './chat-sn/chat-rt/ws-adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new WsAdapter(app));//<<<<<

  await app.listen(8081);
}
bootstrap();
