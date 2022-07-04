import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './config/database.module';
import { StandardsModule } from './standarts/standards.module';
import { FilesModule } from './files/files.module';
import { ReportModule } from './report/report.module';

@Module({
    imports: [
        UserModule,
        DatabaseModule,
        StandardsModule,
        FilesModule,
        ReportModule,
    ],
})
export class AppModule {}
