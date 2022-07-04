import { Module } from '@nestjs/common';
import { StandardsController } from './standards.controller';
import { StandardsService } from './standards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Standards } from './standards.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Standards])],
    controllers: [StandardsController],
    providers: [StandardsService],
})
export class StandardsModule {}
