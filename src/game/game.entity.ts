import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  playerName: string;
}
