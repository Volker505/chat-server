import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  author: {
    type: {name: String, avatar: String, id: String},
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

