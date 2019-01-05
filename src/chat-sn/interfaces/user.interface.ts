import { Document } from 'mongoose';

export interface User extends Document{
  readonly usrolddb: string;
  readonly username: string;
  readonly avatar: string;
}