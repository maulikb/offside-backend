import { Injectable } from '@nestjs/common';
import { CreateTeamStatisticDto } from './dto/create-team-statistic.dto';
import { UpdateTeamStatisticDto } from './dto/update-team-statistic.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { TeamStatistic } from './entities/team-statistic.entity';
import { ConfigService } from '@nestjs/config';
import { GlobalService } from '../common/global.service';

@Injectable()
export class TeamStatisticsService {
  constructor(
    @InjectRepository(TeamStatistic)
    private leagueRepository: Repository<TeamStatistic>,
    private readonly configService: ConfigService,
    private readonly globalService: GlobalService,
  ) {}
  create(createTeamStatisticDto: CreateTeamStatisticDto) {
    return 'This action adds a new teamStatistic';
  }

  async getMatchStatistics() {
    const sportmonks = GlobalService.sportmonks;
    const leagues = await sportmonks.get('v2.0/leagues', {});
  }

  findOne(id: number) {
    return `This action returns a #${id} teamStatistic`;
  }

  update(id: number, updateTeamStatisticDto: UpdateTeamStatisticDto) {
    return `This action updates a #${id} teamStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamStatistic`;
  }
}
