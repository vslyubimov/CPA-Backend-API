import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ConversionsService } from './conversion.service';
import { UpdateConversionDto } from './dto/update-conversion.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('conversions')
@Controller('conversions')
export class ConversionsController {
  constructor(private readonly conversionService: ConversionsService) {}

  @Get()
  findAll() {
    return this.conversionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversionService.findById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversionDto: UpdateConversionDto,
  ) {
    return this.conversionService.update(+id, updateConversionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversionService.removeById(+id);
  }
}
