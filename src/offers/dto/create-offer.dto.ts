import { OfferTypes } from '../../internal/enums';
import { IsEnum, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 1, maxLength: 255 })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 1, maxLength: 255 })
  public description: string;

  @IsEnum(OfferTypes)
  @IsNotEmpty()
  @ApiProperty({ type: 'enum', enum: OfferTypes })
  public type: OfferTypes;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', minimum: 0 })
  public cpaPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', minimum: 0 })
  public rs: number;
}
