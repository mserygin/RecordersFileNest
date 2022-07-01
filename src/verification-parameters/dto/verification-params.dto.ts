import { ApiProperty } from '@nestjs/swagger';

export class VerificationParamsDto {
  @ApiProperty()
  params: object;
  @ApiProperty()
  user: number;
}
