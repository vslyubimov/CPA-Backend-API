import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { PostbackTypeService } from './postbackType.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostbackTypeDto } from './dto/create-postbackType.dto';

@ApiTags('postbackType')
@Controller('postbackType')
export class PostbackTypeController {
  private readonly postbackTypeService: PostbackTypeService;

  constructor(postbackTypeService: PostbackTypeService) {
    this.postbackTypeService = postbackTypeService;
  }

  @Post()
  create(@Body() createPostbackTypeDto: CreatePostbackTypeDto) {
    return this.postbackTypeService.create(createPostbackTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postbackTypeService.remove(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postbackTypeService.findOneById(+id);
  }
}
