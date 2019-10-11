import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { MessageDto } from '../dto/message.dto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';
import { WebsocketService } from '../../chat-ws/websocket.service';


@WebSocketGateway(8080)
export class ChatGeteway {

  @WebSocketServer() server: Server;

  constructor(private wss: WebsocketService) {}

  //todo так работает система
  // this.server.clients[0] = client;
  // this.clients.push(client);
  // client.send(JSON.stringify({event: 'newMsg', data: client}));

  //Observable<WsResponse<number>>     // return from([1, 2]).pipe(map(item => ({ event: 'connect', data: item })));
  @SubscribeMessage('onEnterRoom')
  public onEnterRoom(client, data) {
    // const resultStore = this.wss.get({uid: 'user1', client: client}, 'onEnterRoom');
    // return { event: 'newMsg', data: resultStore };
  }


  @SubscribeMessage('onLeaveRoom')
  public onLeaveRoom(client, data) {

  }

  @SubscribeMessage('onMessege')
  public onMessege(client, data) {

  }
}
