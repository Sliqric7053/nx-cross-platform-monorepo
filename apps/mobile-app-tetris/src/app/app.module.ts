import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiSharedGameBoardModule } from '@nx-cross-platform-monorepo/ui-shared/game-board';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiSharedGameBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
