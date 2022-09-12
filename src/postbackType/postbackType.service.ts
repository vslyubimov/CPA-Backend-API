import { Injectable } from '@nestjs/common';
import { PostbackTypeRepository } from './postbackType.repository';
import { PostbackTypeMapper } from '../mappers/postbackType.mapper';
import { CreatePostbackTypeDto } from './dto/create-postbackType.dto';
import { PostbackType } from './entities/postbackType.entity';

@Injectable()
export class PostbackTypeService {
  private readonly postbackRepository = new PostbackTypeRepository();

  async create(createPostbackTypeDto: CreatePostbackTypeDto) {
    return PostbackTypeMapper.toPostbackTypeInfo(
      await this.postbackRepository.createType(createPostbackTypeDto),
    );
  }

  async remove(id: number): Promise<void> {
    return this.postbackRepository.removeById(id);
  }

  async findOneById(id: number): Promise<Partial<PostbackType>> {
    const postbackType = await this.postbackRepository.getPostbackTypeById(id);
    if (postbackType) {
      return PostbackTypeMapper.toPostbackTypeInfo(postbackType);
    }
    return undefined;
  }
}
