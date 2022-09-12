import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 1, maxLength: 255 })
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 5,
    maxLength: 255,
    example: 'test@example.com',
  })
  public email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 8,
    maxLength: 20,
    example: '+79998882233',
  })
  public phoneNumber: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 5,
    maxLength: 255,
    example: 'https://t.me/DragonOxxx',
  })
  public social: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: 'double',
    minimum: 0,
    example: '300.777',
  })
  public balance: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 8, maxLength: 255 })
  public password: string;
}
