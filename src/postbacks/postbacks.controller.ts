import { Controller, Post, Body, Req } from '@nestjs/common';
import { PostbacksService } from './postbacks.service';
import { CreatePostbackDto } from './dto/create-postback.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('postbacks')
@Controller('postbacks')
export class PostbacksController {
  private readonly postbacksService: PostbacksService;

  constructor(postbacksService: PostbacksService) {
    this.postbacksService = postbacksService;
  }

  @Post('registration')
  registration(
    @Req() request: Request,
    @Body() registrationPostbackDto: CreatePostbackDto,
  ) {
    return this.postbacksService.registration(registrationPostbackDto, request);
  }

  @Post('deposit')
  deposit(
    @Req() request: Request,
    @Body() depositPostbackDto: CreatePostbackDto,
  ) {
    return this.postbacksService.deposit(depositPostbackDto, request);
  }
}
