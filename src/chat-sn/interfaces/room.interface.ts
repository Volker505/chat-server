import { Document } from 'mongoose';
import { User } from './user.interface';
import { Message } from './message.interface';

export interface Room extends Document {
  readonly users: User[];
  readonly messages: Message[];
  readonly avatarRoom: string;
}