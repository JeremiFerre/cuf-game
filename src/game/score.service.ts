import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { Score } from './score.entity';

@Injectable()
export class ScoreService {

  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ) {
  }

  async saveScore(game: Game, time: number): Promise<Score> {
    return this.scoreRepository.save({
      playerName: game.playerName,
      time,
    });
  }
}
