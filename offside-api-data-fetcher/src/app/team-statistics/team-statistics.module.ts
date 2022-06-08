import { Module } from '@nestjs/common';
import { TeamStatisticsService } from './team-statistics.service';
import { TeamStatisticsController } from './team-statistics.controller';
import { GlobalService } from '../common/global.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamStatistic } from './entities/team-statistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamStatistic])],
  controllers: [TeamStatisticsController],
  providers: [TeamStatisticsService, GlobalService],
})
export class TeamStatisticsModule {}
