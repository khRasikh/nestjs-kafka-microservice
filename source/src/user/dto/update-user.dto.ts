import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
} from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiPropertyOptional()
  info: string;

  @ApiPropertyOptional({ default: new Date() })
  updated_at?: string;
}

// or import { PartialType } from "@nestjs/mapped-types";
// import { CreateUserDto } from './create-user.dto';
// export class UpdateUserDto extends PartialType(CreateUserDto) {}
