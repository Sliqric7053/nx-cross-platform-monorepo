import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GameBoardComponent
  ],
  exports: [
    GameBoardComponent
  ],
})
export class UiSharedGameBoardModule {}
