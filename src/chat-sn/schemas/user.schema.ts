import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema ({
  usrolddb: {
    type: String,
  },

  username: {
    type: String,
  },

  avatar: {
    type: String,
  },
}, {index: false});