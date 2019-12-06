import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
      port: 3306,
      username: 'info',
      password: 'root',
      database: 'nuit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
