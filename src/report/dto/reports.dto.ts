import { ApiProperty } from '@nestjs/swagger';

export class AddReportDto {
    @ApiProperty()
    standardId: string;

    @ApiProperty()
    linkDocument: string;

    @ApiProperty()
    studentId: string;
}
