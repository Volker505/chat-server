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


  async getChatList(user: string){

  }

  async getChatInfo(params: {user: string, roomId: string}){

  }

  async createRoom(data: {name?: string, users: UserDto[]}){

    let usersInRoom = [];
    let usersIsNotDB = [];
    for (let user of data.users){
      let userDB = await this.userModel.findOne({mainId: user.mainId});

      if (!userDB){
        userDB = new this.userModel({
          mainId: user.mainId,
          userName: user.userName,
          avatar: user.avatar
        });
        await userDB.save()
      }

      usersInRoom.push(userDB)//todo обработка err
    }

    const newRoom = new this.roomModel({
      name: data.name||`rooom ${data.users[0].userName} ...`,
      users: usersInRoom,
      //добавитьт аву
    });

    for (let user of usersInRoom){
      try {
        await this.userModel.findByIdAndUpdate(user._id,{ rooms: user.rooms.push(newRoom) }, (err) => {
          if (err){
            throw err;
          }
        });
      }
      catch (e) {
        console.log(e, 'ошибка добавления')
      }
    }

    return newRoom;
  }

  async connectRomm(roomId: string, user: string){

  }

  async leaveRoom(roomId: string, user: string){

  }

  async sendMessage(msg: MessageDto){

  }



  // async

}
