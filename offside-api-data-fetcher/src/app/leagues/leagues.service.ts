import { Injectable } from '@nestjs/common';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { League } from './entities/league.entity';
@Injectable()
export class LeaguesService {
  constructor(
    @InjectRepository(League)
    private leagueRepository: Repository<League>,
  ) {}
  async createLeague(createLeagueDto: CreateLeagueDto): Promise<League> {
    const league = this.leagueRepository.create(createLeagueDto);
    console.log(league);
    const createdLeague = await this.leagueRepository.save(league);
    console.log(createdLeague);
    return createdLeague;
  }

  // async saveLeagues(createLeagueDto: CreateLeagueDto) {}
  findOne(id: number) {
    return `This action returns a #${id} league`;
  }

  update(id: number, updateLeagueDto: UpdateLeagueDto) {
    return `This action updates a #${id} league`;
  }

  remove(id: number) {
    return `This action removes a #${id} league`;
  }
}
