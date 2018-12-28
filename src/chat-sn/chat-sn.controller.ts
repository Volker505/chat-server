import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { UserDto } from './dto/user.dto';
import { ChatSnService } from './chat-sn.service';

@Controller('chat-sn')
export class ChatSnController {

  constructor(private chatService: ChatSnService){
  }

  @Get(':id')
  async getChatList(@Param('id') user: string){
    return await this.chatService.getChatList(user);
  }

  @Get('info-chat')
  async getChatInfo (@Query() params: {user: string, roomId: string}){
    return await this.chatService.getChatInfo(params);
  }

  @Post('create')
  async createRoom (@Body() data: {name?: string, users: UserDto[]}){
    return await this.chatService.createRoom(data);
  }

  @Put('connect/:id')
  async connectRoom (@Param('id') roomId: string, @Body() user: string){
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
