import { ValidationPipe, INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { json } from 'express';
import * as dotenv from 'dotenv';
import { AllExceptionsFilter } from './common/filters/exception.filter';
dotenv.config();

export async function getApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('twd template api')
    .setDescription('template api')
    .setVersion('1.0')
    .addTag('Template')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api');
  app.use(json());
  app.enableCors();
  return app;
}

async function bootstrap() {
  const app = await getApp();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
