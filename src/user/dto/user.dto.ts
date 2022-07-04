import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
    @ApiProperty({ default: '' })
    login: string;
    @ApiProperty({ default: '' })
    password: string;
}
