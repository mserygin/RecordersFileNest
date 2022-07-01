import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });

  const { DocumentBuilder, SwaggerModule } = require('@nestjs/swagger');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API')
    .setVersion('queue service started')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('swagger', app, document, {
    uiConfig: {
      docExpansion: 'none',
    },
  });

  await app.listen(PORT, () => console.log(`started on port = ${PORT}`));
}

start();
