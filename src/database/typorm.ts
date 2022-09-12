import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const { CONNECTION_STRING, SYNCHRONIZE_DB, NODE_ENV } = process.env;

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  url: CONNECTION_STRING,
  autoLoadEntities: true,
  logging: NODE_ENV !== 'production',
  entities: [`dist/database/models/**/*.entity{.ts,.js}`],
  migrations: ['dist/database/migrations/**/*.{ts,js}'],
  migrationsRun: true,
};

export default options;
