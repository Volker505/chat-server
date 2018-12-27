import { Inject, Injectable } from '@nestjs/common';
import { NewRoomDto } from './dto/new-room.dto';
import { MessageDto } from './dto/message.dto';
import { messageConnectionToken, roomConnectionToken, userConnectionToken } from '../chat-db/providers';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { Message } from './interfaces/message.interface';
import { Room } from './interfaces/room.interface';


@Injectable()
export class ChatSnService {

  constructor(@Inject(userConnectionToken) private readonly userModel: Model<User>,
              @Inject(messageConnectionToken) private readonly messageModel: Model<Message>,
              @Inject(roomConnectionToken) private readonly roomModel: Model<Room>
  ){}


  async getChatList(user: string){

  }

  async getChatInfo(params: {user: string, roomId: string}){

  }

  async createRoom(params: NewRoomDto){

  }

  async connectRomm(roomId: string, user: string){

  }

  async leaveRoom(roomId: string, user: string){

  }

  async sendMessage(msg: MessageDto){

  }


}
