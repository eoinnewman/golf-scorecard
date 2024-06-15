import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TabsPage } from './tabs/tabs.page';
import { ScoringComponent } from './scoring/scoring.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
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
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
