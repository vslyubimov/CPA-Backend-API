import { Postback } from '../postbacks/entities/postback.entity';

export class PostbackMapper {
  static toPostbackInfo(postback: Partial<Postback>) {
    return {
      id: postback.id,
      postback_type: postback.postback_type,
      click_id: postback.click_id,
      offer_id: postback.offer_id,
      pid: postback.pid,
      base: postback.base,
      deposit: postback.deposit,
      ngr: postback.ngr,
      ip: postback.ip,
    };
  }
}
