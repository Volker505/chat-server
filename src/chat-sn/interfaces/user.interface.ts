import { Document } from 'mongoose';
import { Room } from './room.interface';

export interface User extends Document{
  readonly mainId: string;
  readonly userName: string;
  readonly avatar: string;
  readonly rooms?: Room[];
}