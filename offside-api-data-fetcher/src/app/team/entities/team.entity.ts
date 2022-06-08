import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logoPath: string;

  @Column()
  color: string;
}
