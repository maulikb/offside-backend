import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import {
  ormConfiguration,
  sportmonksApiConfiguration,
} from './common/configurations';
import { LeaguesModule } from './leagues/leagues.module';
import { CommonModule } from './common/common.module';
import { TeamStatisticsModule } from './team-statistics/team-statistics.module';
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
      envFilePath: `.env`,
      load: [ormConfiguration, sportmonksApiConfiguration],
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    LeaguesModule,
    TeamStatisticsModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
