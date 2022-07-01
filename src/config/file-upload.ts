import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('');
  callback(null, `${name}${randomName}${fileExtName}`);
};

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(pdf|doc|docx)$/)) {
    return callback(
      new HttpException('Only file files are allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};
