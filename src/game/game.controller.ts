import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { EndGameDto } from './endGame.dto';
import { Score } from './score.entity';
import { ScoreService } from './score.service';

@Controller('game')
export class GameController {

  constructor(
    private readonly gameService: GameService,
    private readonly scoreService: ScoreService,
  ) {
  }

  @Get('scores')
  async getAllScores(): Promise<Score[]> {
    return this.scoreService.getScores();
  }

  @Get()
  health(): string {
    return 'hello';
  }

  @Post('start')
  async startGame(): Promise<string> {
    return (await this.gameService.startGame()).id;
  }

  @Post('end')
  async endGame(@Body() endGameDto: EndGameDto): Promise<Score> {
    return this.gameService.endGame(endGameDto.gameId, endGameDto.time);
  }
}
