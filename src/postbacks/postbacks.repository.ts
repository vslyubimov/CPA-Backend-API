import { Injectable } from '@nestjs/common';
import { Postback } from './entities/postback.entity';
import { CreatePostbackDto } from './dto/create-postback.dto';

@Injectable()
export class PostbackRepository {
  async create({
    click_id,
    postback_type,
    offer_id,
    pid,
    base,
    deposit,
    ngr,
    ip,
  }: CreatePostbackDto): Promise<Partial<Postback>> {
    return Postback.create({
      click_id,
      postback_type,
      offer_id,
      pid,
      base,
      deposit,
      ngr,
      ip,
    });
  }
}
