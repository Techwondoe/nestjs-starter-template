import { TemplateEntity } from '../../database/models/template.entity';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TemplateEntity]), ConfigModule.forRoot()],
  providers: [TemplateService],
  controllers: [TemplateController],
})
export class TemplateModule {}
