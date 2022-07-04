import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { loginDto } from './dto/user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    login(@Body() data: loginDto) {
        return this.userService.login(data);
    }

    @Post('register')
    register(@Body() data: loginDto): Promise<string> {
        return this.userService.register(data);
    }
}
