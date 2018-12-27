import * as mongoose from 'mongoose';
import { RoomSchema } from './room.schema';


export const UserSchema = new mongoose.Schema ({
  mainId: {
    type: String,
    required: true,
    unique: true
  },

  userName: {
    type: String,
    required: true,
    unique: true
  },

  avatar: {
    type: String,
  },

  rooms: {
    type: [RoomSchema]
  }
});