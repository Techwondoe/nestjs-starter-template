 import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TemplateModule } from './app/template/template.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import options from './database/typorm';

@Module({
  imports: [TypeOrmModule.forRoot(options),ConfigModule.forRoot(), TemplateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
