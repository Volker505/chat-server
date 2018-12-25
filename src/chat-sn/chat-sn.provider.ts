import { dbConnectionToken, messageConnectionToken, roomConnectionToken, userConnectionToken } from '../chat-db/providers';
import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { RoomSchema } from './schemas/room.schema';
import { MessageSchema } from './schemas/message.schema';


export const ChatSnProviders = [
  {
    provide: userConnectionToken,
    useFactory:  (connection: Connection) => connection.model('user', UserSchema),
    inject: [dbConnectionToken]
  },

  {
    provide: roomConnectionToken,
    useFactory:  (connection: Connection) => connection.model('room', RoomSchema),
    inject: [dbConnectionToken]
  },

  {
    provide: messageConnectionToken,
    useFactory:  (connection: Connection) => connection.model('message', MessageSchema),
    inject: [dbConnectionToken]
  }
];