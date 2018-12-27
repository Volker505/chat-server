import { Document } from 'mongoose';
import { User } from './user.interface';

export interface Message extends Document{
  readonly author: User;
  readonly body: string;
  readonly created: Date;
}