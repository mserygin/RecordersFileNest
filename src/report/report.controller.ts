import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { ApiTags } from '@nestjs/swagger';
import { AddReportDto } from './dto/reports.dto';

@Controller('reports')
@ApiTags('reports')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

    @Get('all/:userId')
    getReports(@Param('userId') userId: number) {
        return this.reportService.getReports(userId);
    }

    @Post('add')
    addVerificationParams(@Body() dataAddReport: AddReportDto) {
        return this.reportService.addReport(dataAddReport);
    }
}
