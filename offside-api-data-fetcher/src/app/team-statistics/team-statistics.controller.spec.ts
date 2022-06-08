import { Test, TestingModule } from '@nestjs/testing';
import { TeamStatisticsController } from './team-statistics.controller';
import { TeamStatisticsService } from './team-statistics.service';

describe('TeamStatisticsController', () => {
  let controller: TeamStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamStatisticsController],
      providers: [TeamStatisticsService],
    }).compile();

    controller = module.get<TeamStatisticsController>(TeamStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
