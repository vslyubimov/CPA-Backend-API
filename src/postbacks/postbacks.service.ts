import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostbackDto } from './dto/create-postback.dto';
import { PostbackRepository } from './postbacks.repository';
import { PostbackMapper } from '../mappers/postback.mapper';
import { PostbackTypeRepository } from '../postbackType/postbackType.repository';
import { ConversionsRepository } from '../conversion/conversion.repository';
import { Request } from 'express';

@Injectable()
export class PostbacksService {
  private readonly postbackRepository = new PostbackRepository();
  private readonly postbackTypeRepository = new PostbackTypeRepository();
  private readonly conversionsRepository = new ConversionsRepository();

  async registration(registrationPostback: CreatePostbackDto, req: Request) {
    const type = await this.postbackTypeRepository.getPostbackTypeById(
      registrationPostback.postback_type,
    );
    if (!type) {
      throw new BadRequestException('Postback type not found');
    }
    if (type.type != 'Registration') {
      throw new BadRequestException('Postback type incorrect');
    }
    const conversion = await this.conversionsRepository.create({
      click_id: registrationPostback.click_id,
      pid: registrationPostback.pid,
      ip: registrationPostback.ip,
      offer_id: registrationPostback.offer_id,
      ua: req.get('User-Agent'),
    });
    if (!conversion) {
      throw new BadRequestException('Conversion Error');
    }
    return PostbackMapper.toPostbackInfo(
      await this.postbackRepository.create(registrationPostback),
    );
  }

  async deposit(depositPostback: CreatePostbackDto, req: Request) {
    const type = await this.postbackTypeRepository.getPostbackTypeById(
      depositPostback.postback_type,
    );
    if (!type) {
      throw new BadRequestException('Postback type not found');
    }
    if (type.type != 'Deposit') {
      throw new BadRequestException('Postback type incorrect');
    }
    const conversion = await this.conversionsRepository.create({
      click_id: depositPostback.click_id,
      pid: depositPostback.pid,
      ip: depositPostback.ip,
      offer_id: depositPostback.offer_id,
      ua: req.get('User-Agent'),
    });
    if (!conversion) {
      throw new BadRequestException('Conversion Error');
    }
    return PostbackMapper.toPostbackInfo(
      await this.postbackRepository.create(depositPostback),
    );
  }
}
