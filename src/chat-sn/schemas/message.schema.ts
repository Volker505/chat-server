import * as mongoose from 'mongoose';
import { UserSchema } from './user.schema';

export const MessageSchema = new mongoose.Schema({
  author: {
    type: UserSchema,
    required: true,
  },

  body: {
    type: String
  },

  created: {
    type: Date,
    default: Date.now()
  }
});

