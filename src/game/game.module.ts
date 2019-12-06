import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Score } from './score.entity';
import { GameService } from './game.service';
import { ScoreService } from './score.service';
import { GameController } from './game.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Game,
      Score,
    ]),
  ],
  controllers: [GameController],
  providers: [
    GameService,
    ScoreService,
  ],
  exports: [
    GameService,
    ScoreService,
  ],
})
export class GameModule {}
