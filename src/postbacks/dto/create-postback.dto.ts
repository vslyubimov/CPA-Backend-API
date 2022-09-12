import { ApiProperty } from '@nestjs/swagger';
import { IsIP, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostbackDto {
  @ApiProperty({ type: 'string', example: '35343hbjsdb-dsf' })
  @IsString()
  @IsNotEmpty()
  click_id: string;

  @ApiProperty({ type: 'number', example: 5264357 })
  @IsNumber()
  @IsNotEmpty()
  postback_type: number;

  @ApiProperty({ type: 'number', example: 12003445 })
  @IsNumber()
  @IsNotEmpty()
  offer_id: number;

  @ApiProperty({ type: 'number', example: 453467756 })
  @IsNumber()
  @IsNotEmpty()
  pid: number;

  @ApiProperty({ type: 'number', example: 1567.55 }) // double example
  @IsNumber()
  base: number;

  @ApiProperty({ type: 'number', example: 10000.99 }) // double example
  @IsNumber()
  deposit: number;

  @ApiProperty({ type: 'number', example: 7456.99 }) // double example
  @IsNumber()
  ngr: number;

  @ApiProperty({ type: 'ip', example: '192.168.0.1' })
  @IsIP()
  @IsNotEmpty()
  ip: string;
}
