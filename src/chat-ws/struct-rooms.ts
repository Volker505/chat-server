

export class StructRooms {
  private eventRooms: { [eventName: string]: UserInRoom } = {};
  private chatRooms: { [roomId: string]: UserInRoom } = {};

  public addClientInEventRooms(client: { uid: string, client: any }, eventName: string) {
    this.eventRooms[eventName] = {
      ...this.eventRooms,
      [eventName]: {
        ...this.eventRooms[eventName],
        [client.uid]: client.client
      }
    }
  }

  public addClientInChatRooms(client: { uid: string, client: any }, roomId: string) {
    this.chatRooms[roomId] = {
      ...this.chatRooms,
      [roomId]: {
        ...this.chatRooms[roomId],
        [client.uid]: client.client
      }
    }
  }

  public removeClientInEventRooms(uid: string, eventName: string) {
    if (this.eventRooms && this.eventRooms[eventName] && this.eventRooms[eventName][uid]) {
      return delete this.eventRooms[eventName][uid];
    }
    throw new Error('no such client');
  }

  public removeClientInChatRooms(uid: string, roomId: string) {
    if (this.chatRooms && this.chatRooms[roomId] && this.chatRooms[roomId][uid]) {
      return delete this.chatRooms[roomId][uid];
    }
    throw new Error('no such client in room');
  }

  public getCilet(roomId: string, uid: string) {
    return this.chatRooms[roomId][uid] || null;
  }

  public getClientsInRoom(roomId: string) {
    return Object.values(this.chatRooms[roomId]) || [];
  }

  public getClientsInEventRooms(eventName: string) {
    return Object.values(this.eventRooms[eventName]) || [];
  }
}

export class UserInRoom {
  [uid: string]: any
}

