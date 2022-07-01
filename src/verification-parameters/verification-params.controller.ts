import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VerificationParamsDto } from './dto/verification-params.dto';
import { VerificationParamsService } from './verification-params.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('verification-params')
@ApiTags('verification-params')
export class VerificationParamsController {
  constructor(
    private readonly verificationParamsService: VerificationParamsService,
  ) {}

  @Post('add')
  addVerificationParams(@Body() data: VerificationParamsDto) {
    return this.verificationParamsService.addVerificationParams(data);
  }

  @Get('params-by-hash/:hash')
  getParams(@Param('hash') hash: string) {
    return this.verificationParamsService.getParams(hash);
  }
}
