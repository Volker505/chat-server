import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { MessageDto } from '../dto/message.dto';
import { ChatRtService } from './chat-rt.service';


@WebSocketGateway()
export class ChatGeteway {

  @WebSocketServer() server;

  constructor(private chatRtService: ChatRtService)
  {}

  @SubscribeMessage('sendmsg')
  async sendMSG (client, data: MessageDto) {

  }
}