import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SportmonksApi } from 'sportmonks';
import { ConfigService } from '@nestjs/config';
import { LeaguesService } from '../leagues.service';
import { CreateLeagueDto } from '../dto/create-league.dto';

@Injectable()
export class CreateLeagueCronService {
  constructor(
    private readonly configService: ConfigService,
    private readonly leagueService: LeaguesService,
  ) {}
  @Cron(CronExpression.EVERY_YEAR)
  async handleCron() {
    const apiToken = this.configService.get<string>('apiConfig.token');
    const sportMonks = new SportmonksApi(apiToken);
    await sportMonks.get('v2.0/leagues', {}).then((resp: any) => {
      console.log(resp);
      for (let i = 0; i < resp.data.length; i++) {
        const createLeagueDto = new CreateLeagueDto();
        for (const key in resp.data[i]) {
          switch (key) {
            case 'id':
              createLeagueDto.id = resp.data[i][key];
              break;
            case 'active':
              createLeagueDto.isActive = resp.data[i][key];
              break;
            case 'type':
              createLeagueDto.type = resp.data[i][key];
              break;
            case 'logo_path':
              createLeagueDto.logoPath = resp.data[i][key];
              break;
            case 'name':
              createLeagueDto.name = resp.data[i][key];
              break;
            case 'is_cup':
              createLeagueDto.isCup = resp.data[i][key];
              break;
            case 'is_friendly':
              createLeagueDto.isFriendly = resp.data[i][key];
              break;
          }
        }
        this.leagueService.createLeague(createLeagueDto);
      }
    });
  }
}
