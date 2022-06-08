import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { CreateLeagueCronService } from './shceduled-jobs/create-league-cron.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './entities/league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  controllers: [LeaguesController],
  providers: [LeaguesService, CreateLeagueCronService],
})
export class LeaguesModule {}
