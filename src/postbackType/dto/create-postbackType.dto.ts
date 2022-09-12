import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostbackTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 1, maxLength: 255 })
  public type: string;
}
