import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Conversion } from './entities/conversion.entity';
import { ConversionsController } from './conversion.controller';
import { ConversionsService } from './conversion.service';
import { ConversionsRepository } from './conversion.repository';

@Module({
  controllers: [ConversionsController],
  providers: [ConversionsService, ConversionsRepository],
  imports: [SequelizeModule.forFeature([Conversion])],
})
export class ConversionModule {}
