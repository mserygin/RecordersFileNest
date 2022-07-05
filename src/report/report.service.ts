import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Report } from './report.entity';
import { AddReportDto } from './dto/reports.dto';
import { Standards } from '../standarts/standards.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ReportService {
    constructor(
        @InjectConnection()
        private readonly connection: Connection,
    ) {}

    async getReports(userid: number) {
        const trackedReport = await this.connection.query(`
        select report.id, student_id, standard_id, creator_id, link_document, hash
        from report
                 join standards s on s.id = standard_id and creator_id = ${userid};`);

        const meReport = await this.connection.query(`
        select report.id, student_id, standard_id, link_document, hash
        from report join standards s on s.id = standard_id
        where student_id = ${userid};
    `);
        return {
            meReport,
            trackedReport,
        };
    }

    async addReport(dataReport: AddReportDto): Promise<string> {
        const { studentId, standardId, linkDocument } = dataReport;
        const standardCurrent = await this.connection.manager.findOne(
            Standards,
            {
                where: { hash: standardId },
            },
        );
        const userCurrent = await this.connection.manager.findOne(User, {
            where: { id: studentId },
        });

        const newReport: Report = new Report();
        newReport.standard = standardCurrent;
        newReport.linkDocument = linkDocument;
        newReport.user = userCurrent;
        await this.connection.manager.save<Report>(newReport);

        return 'report added successful';
    }
}
