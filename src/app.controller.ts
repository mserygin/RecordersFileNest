import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('')
export class AppController {
    @Get('')
    get() {
        return 'Everything works';
    }
}
