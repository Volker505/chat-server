import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MessageDto } from './dto/message.dto';
import { messageConnectionToken, roomConnectionToken, userConnectionToken } from '../chat-db/providers';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { Message } from './interfaces/message.interface';
import { Room } from './interfaces/room.interface';
import { UserDto } from './dto/user.dto';


@Injectable()
export class ChatSnService {

  constructor(@InjectModel(userConnectionToken) private readonly userModel: Model<User>,
              @InjectModel(messageConnectionToken) private readonly messageModel: Model<Message>,
              @InjectModel(roomConnectionToken) private readonly roomModel: Model<Room>
  ){}

//todo все проверить

  async getChatList(roomIds: string[]): Promise<{status: string, list?: any}>{

    let rooms = [];
    for (let id of roomIds){
      const room = await this.roomModel.findById(id);
      room && rooms.push(room);//todo
    }

    return { status:'ok', list: rooms}
  }

  async getChatInfo(roomId: string){
    return await this.roomModel.findById(roomId);
  }

  async createRoom(data: {name?: string, users: UserDto[]}){

    let usersInRoom = [];
    for (let user of data.users){
      let userDB = await this.userModel.findOne({usrolddb: user.usrolddb});

      if (!userDB){
        userDB = new this.userModel({
          usrolddb: user.usrolddb,
          username: user.username,
          avatar: user.avatar
        });
        await userDB.save()
      }

      usersInRoom.push(userDB)//todo обработка err
    }

    const newRoom = new this.roomModel({
      name: data.name||`rooom ${data.users[0].username} ...`,
      users: usersInRoom,
      //добавитьт аву
    });


    await newRoom.save();
    return newRoom;
  }

  async connectRoom(roomId: string, user: UserDto){
    // const userDB =

    let userDB = await this.userModel.findOne({usrolddb: user.usrolddb});

    if (!userDB){
      userDB = new this.userModel({
        usrolddb: user.usrolddb,
        username: user.username,
        avatar: user.avatar
      });
      await userDB.save()
    }

  }

  async leaveRoom(roomId: string, user: string){

  }

  // async sendMessage(msg: MessageDto){
  //
  // }

  // async

}
