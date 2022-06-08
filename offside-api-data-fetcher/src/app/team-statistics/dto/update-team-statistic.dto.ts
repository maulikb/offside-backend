import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamStatisticDto } from './create-team-statistic.dto';

export class UpdateTeamStatisticDto extends PartialType(
  CreateTeamStatisticDto,
) {}
