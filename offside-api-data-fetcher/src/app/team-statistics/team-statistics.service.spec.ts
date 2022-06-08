import { Test, TestingModule } from '@nestjs/testing';
import { TeamStatisticsService } from './team-statistics.service';

describe('TeamStatisticsService', () => {
  let service: TeamStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamStatisticsService],
    }).compile();

    service = module.get<TeamStatisticsService>(TeamStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
