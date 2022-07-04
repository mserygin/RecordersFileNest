import { Injectable, NotFoundException } from "@nestjs/common";
import { Connection } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { User } from './user.entity';
import { loginDto } from './dto/user.dto';
import { InjectConnection } from '@nestjs/typeorm';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
    constructor(
        @InjectConnection()
        private readonly connection: Connection,
    ) {}

    async login(data: loginDto): Promise<any> {
        const candidateUser = await this.connection.manager.findOne(User, {
            where: {
                login: data.login,
                password: this.passwordSha1(data.password),
            },
        });
        if (!!candidateUser) {
            return { token: candidateUser.id };
        }
        throw new NotFoundException('Invalid parameters');
    }

    async register(data: loginDto): Promise<string> {
        const newUser: User = new User();
        newUser.login = data.login;
        newUser.password = this.passwordSha1(data.password);
        newUser.token = jwt.sign({ login: data.login }, process.env.JWT_KEYS);

        await this.connection.manager.save<User>(newUser);

        return 'Reg successful';
    }

    passwordSha1(password: string): string {
        return crypto.createHash('sha1').update(password).digest('hex');
    }
}
