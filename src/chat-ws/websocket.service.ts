import { Injectable } from '@nestjs/common';
import { StructRooms, UserInRoom } from './struct-rooms';
import { MessageDto } from '../chat-sn/dto/message.dto';

@Injectable()
export class WebsocketService {

  private store: StructRooms = new StructRooms();

  public sendMsgClient(roomId: string, uid: string, msg: MessageDto) {
    this.store.getCilet(roomId, uid).send(JSON.stringify({event: roomId, data: msg}));
  }

  public brodcastInEventRoom(eventName: string, data: any) {
    this.store.getClientsInEventRooms(eventName)
      .forEach(client => client.send(JSON.stringify({event: eventName, data: data})))
  }

  public brodcastInRoom(roomId: string, msg: MessageDto) {
    this.store.getClientsInRoom(roomId)
      .forEach(client => client.send(JSON.stringify({event: roomId, data: msg})))
  }

  public connectToRoom(roomId: string, client: { uid: string, client: any }) {
    this.store.addClientInChatRooms(client, roomId);
  }

  public connectToEventRoom(eventName: string, client: { uid: string, client: any }) {
    this.store.addClientInEventRooms(client, eventName);
  }

  public leaveEvent(evetnName: string, uid: string) {
    try {
      this.store.removeClientInEventRooms(uid, evetnName)
    }catch (e) {
      return e;
    }
  }

  public leaveRoom(roomId, uid: string) {
    try {
      this.store.removeClientInChatRooms(uid, roomId)
    }catch (e) {
      return e;
    }
  }

}
