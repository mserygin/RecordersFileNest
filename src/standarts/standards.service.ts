import { Injectable } from '@nestjs/common';
import { StandardsDto } from './dto/standards.dto';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { Standards } from './standards.entity';
import { User } from '../user/user.entity';

@Injectable()
export class StandardsService {
    constructor(
        @InjectConnection()
        private readonly connection: Connection,
    ) {}

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                const r = (Math.random() * 16) | 0,
                    v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            },
        );
    }

    async addVerificationParams(paramsVerification: StandardsDto) {
        const { params, user } = paramsVerification;
        const uid = this.uuidv4();

        const userCurrent = await this.connection.manager.findOne(User, {
            where: { id: user },
        });

        const paramVerification: Standards = new Standards();
        paramVerification.params = params;
        paramVerification.hash = uid;
        paramVerification.user = userCurrent;
        await this.connection.manager.save<Standards>(paramVerification);

        return uid;
    }

    async getParams(hash: string) {
        return await this.connection.manager.findOne(Standards, {
            where: { hash: hash },
        });
    }
}
