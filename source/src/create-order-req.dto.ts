import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateOrderRequest {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  price: number;

  @ApiPropertyOptional({default: new Date()})
  created_at?: string;
}
