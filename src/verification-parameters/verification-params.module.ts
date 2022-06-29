import { Module } from '@nestjs/common';
import { VerificationParamsController } from './verification-params.controller';
import { VerificationParamsService } from './verification-params.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerificationParameters } from './verification-params.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VerificationParameters])],
  controllers: [VerificationParamsController],
  providers: [VerificationParamsService],
})
export class VerificationParamsModule {}
