import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  playerName: string;

  @Column()
  time: number;
}
