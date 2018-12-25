import * as mongoose from 'mongoose';


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
  }
});