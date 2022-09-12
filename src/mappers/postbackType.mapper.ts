import { PostbackType } from '../postbackType/entities/postbackType.entity';

export class PostbackTypeMapper {
  static toPostbackTypeInfo(postbackType: Partial<PostbackType>) {
    return { id: postbackType.id, type: postbackType.type };
  }
}
