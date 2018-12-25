import * as mongoose from 'mongoose';
import { UserSchema } from './user.schema';
import { MessageSchema } from './message.schema';

export const RoomSchema = new mongoose.Schema({
  userMod: {
    type: UserSchema,
  },

  users: {
    type: [UserSchema]
  },

  messages: {
    type: [MessageSchema]
  }

});