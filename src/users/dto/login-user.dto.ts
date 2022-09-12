import { IsEmail, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ValidateIf((o) => !o.email || o.name)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 1,
    maxLength: 255,
    required: false,
  })
  public name?: string;

  @ValidateIf((o) => !o.name || o.email)
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 5,
    maxLength: 255,
    required: false,
    example: 'test@example.com',
  })
  public email?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', minLength: 8, maxLength: 255 })
  public password: string;
}
