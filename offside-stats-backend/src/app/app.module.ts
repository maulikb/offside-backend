import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfiguration } from './common/configurations';
import { ConfigModule } from '@nestjs/config';
import { LeagueModule } from './league/league.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT) || 5432,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
    }),
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [ormConfiguration],
      isGlobal: true,
    }),
    LeagueModule,
    CommonModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
