import { Injectable } from '@nestjs/common';
import { VerificationParamsDto } from './dto/verification-params.dto';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { VerificationParameters } from './verification-params.entity';
import { User } from '../user/user.entity';

@Injectable()
export class VerificationParamsService {
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

  async addVerificationParams(paramsVerification: VerificationParamsDto) {
    const { params, user } = paramsVerification;
    const url = this.uuidv4();

    const userCurrent = await this.connection.manager.findOne(User, {
      where: { id: user },
    });

    const paramVerification: VerificationParameters =
      new VerificationParameters();
    paramVerification.params = params;
    paramVerification.url = url;
    paramVerification.user = userCurrent;
    await this.connection.manager.save<VerificationParameters>(
      paramVerification,
    );

    return url;
  }

  async getParams(hash: string) {
    return await this.connection.manager.findOne(VerificationParameters, {
      where: { url: hash },
    });
  }
}
