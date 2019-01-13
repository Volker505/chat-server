import { Injectable } from '@nestjs/common';
import { messageConnectionToken } from '../../chat-db/providers';
import { Message } from '../interfaces/message.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ChatRtService {

  constructor(
    @InjectModel(messageConnectionToken) private readonly messageModel: Model<Message>,
  )
  {}




}
