import { ApiProperty } from '@nestjs/swagger';

export class StandardsDto {
  @ApiProperty()
  params: object;
  @ApiProperty()
  user: number;
}
