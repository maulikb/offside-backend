import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity()
export class League {
  @PrimaryColumn()
  id: number;

  @Column({ default: false })
  isActive: boolean;

  @Column()
  type: string;

  @Column()
  logoPath: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  rankIndex: number;

  @Column({ default: false })
  isCup: boolean;

  @Column({ default: false })
  isFriendly: boolean;
}
