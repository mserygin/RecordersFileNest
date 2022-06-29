import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './config/database.module';
import { VerificationParamsModule } from './verification-parameters/verification-params.module';

@Module({
  imports: [UserModule, DatabaseModule, VerificationParamsModule],
})
export class AppModule {}
