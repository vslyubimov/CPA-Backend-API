import { Injectable } from '@nestjs/common';
import { PostbackType } from './entities/postbackType.entity';
import { CreatePostbackTypeDto } from './dto/create-postbackType.dto';

@Injectable()
export class PostbackTypeRepository {
  async createType({
    type,
  }: CreatePostbackTypeDto): Promise<Partial<PostbackType>> {
    return PostbackType.create({
      type,
    });
  }

  async removeById(id: number) {
    const postbackType = await this.getPostbackTypeById(id);
    if (postbackType) {
      await postbackType.destroy();
    }
  }

  async getPostbackTypeById(id: number): Promise<PostbackType> {
    return PostbackType.findOne({
      rejectOnEmpty: undefined,
      where: {
        id,
      },
    });
  }
}
