import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { GlobalService } from '../common/global.service';

@Module({
  imports: [GlobalService],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
