import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IsInt, IsNotEmpty } from 'class-validator';

@Entity()
export class TeamStatistic {
  @PrimaryColumn()
  @IsNotEmpty()
  id: number;

  @PrimaryColumn()
  @IsNotEmpty()
  session_id: number;

  @Column()
  @IsInt()
  totalShotsHome: number;

  @Column()
  pointPerGameHome: number;
  @Column()
  avgBallPossessionPercentageHome: number;

  @Column()
  cleanSheetPercentageHome: number;

  @Column()
  avgGoalsPerGameScored: number;

  @Column()
  offense: number;

  @Column()
  defense: number;

  @Column()
  @IsInt()
  bestOffensesHome: number;

  @Column()
  @IsInt()
  worstOffensesHome: number;

  @Column()
  @IsInt()
  bestDefensesHome: number;

  @Column()
  @IsInt()
  worstDefensesHome: number;

  @Column()
  passAccuracyHome: number;

  @Column()
  avgBallPossessionPercentageAway: number;

  @Column()
  cleanSheetPercentageAway: number;

  @Column()
  pointsPerGameAway: number;

  @Column()
  passAccuracyAway: number;

  @Column()
  @IsInt()
  aggregationRedHome: number;

  @Column()
  @IsInt()
  aggregationRedAway: number;

  @Column()
  @IsInt()
  aggregationYellowHome: number;

  @Column()
  @IsInt()
  aggregationYellowAway: number;

  @Column()
  @IsInt()
  totalShotsAway: number;

  @Column()
  @IsInt()
  scoresInFirst15Minutes: number;

  @Column()
  @IsInt()
  shotsOnTargetHome: number;

  @Column()
  @IsInt()
  shotsOnTargetAway: number;

  @Column()
  @IsInt()
  shotsOnTargetOnConcedeHome: number;

  @Column()
  @IsInt()
  shotsOnTargetOnConcedeAway: number;

  @Column()
  avgDangersAttackPerGameHome: number;

  @Column()
  avgDangersAttackPerGameAway: number;

  @Column()
  @IsInt()
  bestOffenseAway: number;

  @Column()
  @IsInt()
  worstOffenseAway: number;

  @Column()
  @IsInt()
  bestDefenseAway: number;

  @Column()
  @IsInt()
  worstDefenseAway: number;
}
