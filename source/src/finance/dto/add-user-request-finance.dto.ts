import { ApiProperty } from "@nestjs/swagger";

export class addUserRequestInFinance {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  payment_status: boolean;

  @ApiProperty()
  date: string;
}
