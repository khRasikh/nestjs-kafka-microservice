import { ApiProperty } from "@nestjs/swagger";

export class CreateFinanceRequest {
  @ApiProperty()
  unique_id: number;

  @ApiProperty()
  source_full_name: string;

  @ApiProperty()
  destination_full_name: string;

  @ApiProperty()
  bank_name: string;

  @ApiProperty()
  transfer_id: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  currency: string;
}
