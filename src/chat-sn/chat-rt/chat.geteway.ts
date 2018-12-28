import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { MessageDto } from '../dto/message.dto';


@WebSocketGateway()
export class ChatGeteway {
  @WebSocketServer() server;

  @SubscribeMessage('sendmsg')
  async sendMSG (client, data: MessageDto) {

  }
}