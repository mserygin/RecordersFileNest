import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

@Injectable()
export class FilesService {
    async uploadFile(file: any) {
        const doc = await new PDFDocument({ margin: 50 });
        const NameFile = file.originalname.slice(0, -4) + 'pdf';
        this.generateHeader(
            doc,
            process.env.LINK_FILES + `get-user-doc/${file.filename}`,
        );

        await doc.end();
        await doc.pipe(
            fs.createWriteStream(`src/files/pdf-uploads/${NameFile}`),
        );

        return {
            linkReport: process.env.LINK_FILES + `report/${NameFile}`,
            linkDocument:
                process.env.LINK_FILES + `get-user-doc/${file.filename}`,
        };
    }

    generateHeader(doc, linkDocx) {
        doc.fillColor('#6d86e3')
            .fontSize(20)
            .text('Verification passed ', { align: 'center' })
            .fontSize(10)
            .fillColor('#444444')
            .text('Docx -  ' + linkDocx, { align: 'center' })
            .moveDown();
    }
}
