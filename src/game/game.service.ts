import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ScoreService } from './score.service';
import { Score } from './score.entity';

@Injectable()
export class GameService {

  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    private readonly scoreService: ScoreService,
  ) {
  }

  async startGame(): Promise<Game> {
    return this.gameRepository.save(new Game());
  }

  async endGame(gameId: string, time: number): Promise<Score> {
    const game: Game = await this.gameRepository.findOne(gameId);
    return this.scoreService.saveScore(game, time);
  }
}
