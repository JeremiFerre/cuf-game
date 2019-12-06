import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { EndGameDto } from './endGame.dto';
import { Score } from './score.entity';

@Controller('game')
export class GameController {

  constructor(
    private readonly gameService: GameService,
  ) {
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
