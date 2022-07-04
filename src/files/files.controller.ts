import {
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../config/file-upload';
import { FilesService } from './files.service';

@Controller('files')
@ApiTags('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file) {
        return await this.filesService.uploadFile(file);
    }

    @Get('get-user-doc/:fileName')
    getImage(@Param('fileName') file, @Res() res) {
        const response = res.sendFile(file, { root: './uploads' });
        return {
            status: HttpStatus.OK,
            data: response,
        };
    }

    @Get('report/:fileName')
    getReport(@Param('fileName') file, @Res() res) {
        const response = res.sendFile(file, {
            root: './src/files/pdf-uploads',
        });
        return {
            status: HttpStatus.OK,
            data: response,
        };
    }
}
