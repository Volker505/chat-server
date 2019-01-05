import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ChatSnService } from './chat-sn.service';

@Controller('chat-sn')
export class ChatSnController {

  constructor(private chatService: ChatSnService){
  }

  @Get()//5c277402e12cc73de4a30e2c//5c27741ee12cc73de4a30e2f//5c277457ac26ce3df4da4aba
  async getChatList(@Query() data: string){  //в качестве параметра принимаем массив в строке JSON.stringify([])

    const data1 = JSON.stringify({arr: ['5c277402e12cc73de4a30e2c', '5c27741ee12cc73de4a30e2f', '5c277457ac26ce3df4da4aba']});

    return await this.chatService.getChatList(JSON.parse(data1).arr);
  }

  @Get('info-chat/:id')
  async getChatInfo (@Param('id') roomId: string){
    return await this.chatService.getChatInfo(roomId);
  }

  @Post('create')
  async createRoom (@Body() data: {name?: string, users: UserDto[]}){
    return await this.chatService.createRoom(data);

    //пример запроса
    // {
    //   "name": "чат с максом",
    //   "users": [
    //   {
    //     "mainId" : "1",
    //     "userName" : "макс",
    //     "avatar" : "бла бла"
    //   },
    //
    //   {
    //     "mainId" : "2",
    //     "userName" : "иван",
    //     "avatar" : "бла бла"
    //   }
    // ]
    // }
  }

  @Put('connect/:id')
  async connectRoom (@Param('id') roomId: string, @Body() user: UserDto){
    return await this.chatService.connectRoom(roomId, user);
  }

  @Put('leave/:id')
  async leaveRoom (@Param('id') roomId: string, @Body() user: string){
    return await this.chatService.leaveRoom(roomId, user);
  }

  //////msg

  // @Post('send-msg')
  // async sendMessage (@Body() msg: MessageDto){
  //
  // }

  // @Delete('del-msg/:id')
  // async delMsg(@Param('id') roomId: string, @Body() : ){
  //
  // }

}
