import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './config/database.module';
import { VerificationParamsModule } from './verification-parameters/verification-params.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [UserModule, DatabaseModule, VerificationParamsModule, FilesModule],
})
export class AppModule {}
