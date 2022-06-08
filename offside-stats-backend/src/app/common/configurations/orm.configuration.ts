import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const db_config: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export default () => {
  if (!process.env.DB_TYPE) {
    throw new Error('DB_TYPE is not defined');
  }
  if (!process.env.DB_USERNAME) {
    throw new Error('DB_USERNAME is not defined');
  }
  if (!process.env.DB_PASSWORD) {
    throw new Error('DB_PASSWORD is not defined');
  }
  if (!process.env.DB_PORT) {
    throw new Error('PORT is not defined');
  } else {
    const port = parseInt(process.env.DB_PORT, 10);
    if (isNaN(port)) {
      throw new Error('PORT is not a number');
    }
  }
  if (!process.env.DB_HOST) {
    throw new Error('DB_HOST is not defined');
  }
  if (!process.env.DB_NAME) {
    throw new Error('DB_NAME is not defined');
  }

  return {
    config: {
      type: process.env.DB_TYPE as 'postgres',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT) || 5432,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    },
  };
};
