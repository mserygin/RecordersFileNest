import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StandardsDto } from './dto/standards.dto';
import { StandardsService } from './standards.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('verification-params')
@ApiTags('verification-params')
export class StandardsController {
    constructor(private readonly standardsService: StandardsService) {}

    @Post('add')
    addVerificationParams(@Body() data: StandardsDto) {
        return this.standardsService.addVerificationParams(data);
    }

    @Get('params-by-hash/:hash')
    getParams(@Param('hash') hash: string) {
        return this.standardsService.getParams(hash);
    }
}
