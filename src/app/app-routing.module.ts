import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { ScoringComponent } from './scoring/scoring.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'add-players',
    component : PlayersComponent
  },
  {
    path: 'scoring',
    component : ScoringComponent
  },
  {
    path: 'leaderboard',
    component : LeaderboardComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
