import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamStatisticsService } from './team-statistics.service';
import { CreateTeamStatisticDto } from './dto/create-team-statistic.dto';
import { UpdateTeamStatisticDto } from './dto/update-team-statistic.dto';

@Controller('team-statistics')
export class TeamStatisticsController {
  constructor(private readonly teamStatisticsService: TeamStatisticsService) {}

  @Post()
  create(@Body() createTeamStatisticDto: CreateTeamStatisticDto) {
    return this.teamStatisticsService.create(createTeamStatisticDto);
  }

  @Get()
  findAll() {
    return this.teamStatisticsService.getMatchStatistics();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamStatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamStatisticDto: UpdateTeamStatisticDto,
  ) {
    return this.teamStatisticsService.update(+id, updateTeamStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamStatisticsService.remove(+id);
  }
}
