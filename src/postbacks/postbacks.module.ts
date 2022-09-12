import { Module } from '@nestjs/common';
import { PostbacksService } from './postbacks.service';
import { PostbacksController } from './postbacks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Postback } from './entities/postback.entity';

@Module({
  imports: [SequelizeModule.forFeature([Postback])],
  controllers: [PostbacksController],
  providers: [PostbacksService],
})
export class PostbacksModule {}
