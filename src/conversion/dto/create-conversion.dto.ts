import { IsIP, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConversionDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', minimum: 0, example: 1 })
  public offer_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: 'number', minimum: 0, example: 1 })
  public pid: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', example: '35343hbjsdb-dsf' })
  public click_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', example: 'Chromium V8.07787' })
  public ua: string;

  @IsIP()
  @IsNotEmpty()
  @ApiProperty({ type: 'ip', example: '163.98.99.01' })
  public ip: string;
}
