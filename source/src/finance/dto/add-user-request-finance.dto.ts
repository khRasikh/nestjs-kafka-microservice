import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class addUserRequestInFinance {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ default: false })
  @IsNotEmpty()
  payment_status: boolean;

  @ApiPropertyOptional({ default: new Date()})
  date: string;
}
