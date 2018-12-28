import { messageConnectionToken, roomConnectionToken, userConnectionToken } from '../chat-db/providers';
import { UserSchema } from './schemas/user.schema';
import { RoomSchema } from './schemas/room.schema';
import { MessageSchema } from './schemas/message.schema';


export const ChatSnProviders = [
  {
    name: userConnectionToken, schema: UserSchema
  },

  {
    name: roomConnectionToken, schema: RoomSchema
  },

  {
    name: messageConnectionToken, schema: MessageSchema
  }
];