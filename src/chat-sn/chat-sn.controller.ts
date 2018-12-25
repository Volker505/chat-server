import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NewRoomDto } from './dto/new-room.dto';
import { MessageDto } from './dto/message.dto';

@Controller('chat-sn')
export class ChatSnController {


  @Get(':id')
  async infoChat(@Param('id') roomId?: string){

  }

  @Post('create')
  async createRoom (@Body() params: NewRoomDto){

  }

  @Put('connect/:id')
  async connectRomm (@Param('id') roomId: string, @Body() user: string){

  }

  @Put('leave/:id')
  async leaveRoom (@Param('id') roomId: string, @Body() user: string){

  }

  //////msg

  @Post('send-msg')
  async sendMessage (@Body() msg: MessageDto){

  }

  // @Delete('del-msg/:id')
  // async delMsg(@Param('id') roomId: string, @Body() : ){
  //
  // }

}
