import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostbackType } from './entities/postbackType.entity';
import { PostbackTypeController } from './postbackType.controller';
import { PostbackTypeService } from './postbackType.service';

@Module({
  imports: [SequelizeModule.forFeature([PostbackType])],
  controllers: [PostbackTypeController],
  providers: [PostbackTypeService],
  exports: [PostbackTypeService],
})
export class PostbackTypeModule {}
