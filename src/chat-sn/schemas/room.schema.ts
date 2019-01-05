import * as mongoose from 'mongoose';
import { UserSchema } from './user.schema';
import { MessageSchema } from './message.schema';

export const RoomSchema = new mongoose.Schema({

  name: {
    type: String
  },

  users: {
    type: [UserSchema]
  },

  messages: {
    type: [MessageSchema]
  },

  avatar:{
    type: String
  }

  //добавить материалы беседы

});

// module.exports = RoomSchema.index({users: -1});
